class ItemsController < ApplicationController
    skip_before_action :authorized, only: :index

    def index
        items = Item.all
        render json: items, status: :ok
    end

    def show
        item = Item.find_by(id: params[:id])
        render json: item, status: :ok
    end
end
