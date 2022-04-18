class UserquizzesController < ApplicationController
    def index
        userquizzes = Userquizzes.all 
        render json: userquizzes, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        userquizzes = Userquizzes.where({user_id: user.id})
        render json: userquizzes, status: :ok
    end

    def create
        userquiz = Userquiz.create(userquizparams)
        quiz = Quiz.find(userquiz.quiz_id)
        user = User.find(userquiz.user_id)
        if params[:score] == quiz.max_score
            user.update(wallet: (user.wallet + 2) )
            if quiz.quizitems.count != 0
                quizitem = quiz.quizitems.sample
                Useritem.create(user_id: user.id, item_id: quizitem.item_id) unless user.useritems.pluck(:item_id).include?(quizitem.item_id)
            end
        end
        user.update(wallet: (user.wallet + 1) )
        render json: user, serializer: UserSerializer, status: :ok
    end

    private
    def userquizparams
        params.permit(:user_id, :quiz_id, :score)
    end
end
