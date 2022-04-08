class QuestionsController < ApplicationController

    def index
        questions = Question.all 
        render json: questions, status: :ok
    end

    def show
        question = Question.find_by(id: params[:id])
        render json: question, status: :ok
    end

end
