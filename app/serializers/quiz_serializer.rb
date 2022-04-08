class QuizSerializer < ActiveModel::Serializer
  attributes :name, :questions, :answers

  def questions
    object.questions.pluck :question_text
  end

  def answers
    object.answers.pluck :question_id, :question_text, :correct
  end
end
