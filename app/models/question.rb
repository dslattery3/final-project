class Question < ApplicationRecord
  belongs_to :quiz
  has_many :answers, dependent: :destroy

  validates :question_text, presence: true
end
