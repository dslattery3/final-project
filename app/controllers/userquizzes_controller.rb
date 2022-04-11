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
        # user = userquiz.user
        render json: userquiz,  status: :ok
    end


    private
    def userquizparams
        params.permit(:user_id, :quiz_id, :score)
    end
end
