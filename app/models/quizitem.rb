class Quizitem < ApplicationRecord
  belongs_to :item
  belongs_to :quiz
end
