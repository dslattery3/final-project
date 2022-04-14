class QuizSerializer < ActiveModel::Serializer
  attributes :name, :id, :max_score
  has_many :questions
  has_many :quizitems
end
