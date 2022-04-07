class UseritemsController < ApplicationController
    def index
        byebug
        user = User.find_by(username: params[:username])
        items = Useritem.where({user_id: user.id})
        render json: items, status: :ok
    end
end
