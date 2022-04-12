class QuizzesController < ApplicationController
    # skip_before_action :authorized, only: :show
    
    def index
        quizzes = Quiz.all
        render json: quizzes, status: :ok
    end

    def show
        quiz = Quiz.find_by(id: params[:id])
        render json: quiz, status: :ok
    end

    def perfect_score
        user = User.find_by(id: session[:user_id])
        userquiz = Userquiz.create(user_id: user.id, quiz_id: params[:id], score: params[:score])
        quizitem = Quiz.find_by(id: params[:id]).quizitems.sample        
        if (user.useritems.pluck(:item_id).include?(quizitem.item_id))
            render json: user, serializer: UserSerializer, status: :ok
        else
            Useritem.create(user_id: user.id, item_id: quizitem.item.id)
            render json: user, serializer: UserSerializer, status: :ok
        end
    end

end
