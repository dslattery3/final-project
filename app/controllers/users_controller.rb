class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: params[:id])
        if user.id != session[:user_id]
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
        render json: user, status: :ok
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(profile_pic: params[:profile_pic])
        render json: user, status: :ok
    end

    private
    def user_params
        params.permit(:username, :password)
    end
end
