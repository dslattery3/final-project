class UseritemSerializer < ActiveModel::Serializer
  attributes :id, :item, :name
  
  def item
    object.item.image_url
  end

  def name
    object.item.name
  end
end
