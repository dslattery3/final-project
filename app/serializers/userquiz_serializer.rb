class UserquizSerializer < ActiveModel::Serializer
  attributes :id, :score, :user_id, :quiz, :max_score

  def max_score
    object.quiz.max_score
  end

  def quiz
    object.quiz.name
  end
end
