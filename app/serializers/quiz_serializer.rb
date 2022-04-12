class QuizSerializer < ActiveModel::Serializer
  attributes :name, :id
  has_many :questions
  has_many :quizitems
end
