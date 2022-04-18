class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :me]

    def create
        user = User.create!(user_params)
        user.update(wallet: 5)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: params[:id])
        if user.id != session[:user_id]
            render json: {error: "Not Authorized"}, status: :unauthorized
        else
            render json: user, include: :userquizzes, status: :ok
        end
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(profile_pic_params)
        render json: user, status: :ok
    end

    def me
        user = User.find_by(id: session[:user_id])
        if user
            return render json: user, status: :ok
        end
    end

    private
    def user_params
        params.permit(:username, :password)
    end

    def profile_pic_params
        params.permit(:profile_pic, :profile_pic_name, :profile_pic_wiki)
    end

end
