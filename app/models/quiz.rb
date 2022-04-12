class Quiz < ApplicationRecord
    has_many :userquizzes, dependent: :destroy
    has_many :users, through: :userquizzes
    has_many :questions, dependent: :destroy
    has_many :answers, through: :questions
    has_many :quizitems, dependent: :destroy
    has_many :items, through: :quizitems

    validates :name, presence: true
end
