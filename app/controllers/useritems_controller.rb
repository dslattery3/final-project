class UseritemsController < ApplicationController
    def index
        user = User.find_by(username: params[:username])
        items = Useritem.where({user_id: user.id})
        render json: items, status: :ok
    end

    def show
        useritem = Useritem.find_by(id: params[:id])
        render json: useritem, status: :ok
    end

    def create
        user = User.find(session[:user_id])
        item = Item.find_by(id: params[:item_id])
        useritem = Useritem.create(user_id: user.id, item_id: item.id)
        user.update(wallet: user.wallet - item.price)
        render json: useritem, status: :created
    end
end
