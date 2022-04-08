class Item < ApplicationRecord
    has_many :useritems, dependent: :destroy
    has_many :users, through: :useritems
    
    validates :name, presence: true
    validates :image_url, presence: true
end
