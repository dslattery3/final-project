class QuizitemsController < ApplicationController
    def index
        quizitems = Quizitem.all
        render json: quizitems, status: :ok
    end

    def show
        quizitem = Quizitem.find_by(id: params[:id])
        render json: quizitem, status: :ok
    end

end