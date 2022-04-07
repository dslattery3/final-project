class User < ApplicationRecord
    has_secure_password
    has_many :useritems
    has_many :items, through: :useritems

    validates :username, uniqueness: true

end
