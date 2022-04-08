class User < ApplicationRecord
    has_secure_password
    has_many :useritems, dependent: :destroy
    has_many :items, through: :useritems
    has_many :userquizzes, dependent: :destroy
    has_many :quizzes, through: :userquizzes

    validates :username, uniqueness: true

end
