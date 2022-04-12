class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :me]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: params[:id])
        if user.id != session[:user_id]
            return render json: {error: "Not Authorized"}, status: :unauthorized
        end
        render json: user, include: :userquizzes, status: :ok
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(profile_pic: params[:profile_pic], profile_pic_name: params[:profile_pic_name], profile_pic_wiki: params[:profile_pic_wiki])
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
end
