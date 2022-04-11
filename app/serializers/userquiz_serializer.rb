class UserquizSerializer < ActiveModel::Serializer
  attributes :id, :score, :user_id, :quiz

  def quiz
    object.quiz.name
  end
end
