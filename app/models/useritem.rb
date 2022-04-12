class Useritem < ApplicationRecord
  belongs_to :user
  belongs_to :item
  
  validate :check, on: :create

  private
  def check
    item = Item.find(self.item_id)
    user = User.find(self.user_id)
    if Useritem.find_by({user_id: user.id, item_id: item.id})
      return user
    end
  end

end
