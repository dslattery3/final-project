class UseritemSerializer < ActiveModel::Serializer
  attributes :id, :item
  
  def item
    object.item.image_url
  end
end
