class QuizzesController < ApplicationController
    skip_before_action :authorized, only: :index
    
    def index
        quizzes = Quiz.all
        render json: quizzes, status: :ok
    end

    def show
        quiz = Quiz.find_by(id: params[:id])
        render json: quiz, status: :ok
    end

end
