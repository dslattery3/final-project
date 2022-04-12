class Item < ApplicationRecord
    has_many :useritems, dependent: :destroy
    has_many :users, through: :useritems
    has_many :quizitems, dependent: :destroy
    has_many :quizzes, through: :quizitems
    
    validates :name, presence: true
    validates :image_url, presence: true
end
