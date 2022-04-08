class AnswersController < ApplicationController
    
    def index
        answers = Answer.all
        render json: answers, status: :ok
    end

    def show
        answer = Answer.find_by(id: params[:id])
        render json: answer, status: :ok
    end
end
