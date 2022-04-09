class QuizSerializer < ActiveModel::Serializer
  attributes :name, :id
  has_many :questions
end
