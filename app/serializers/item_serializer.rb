class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :category, :from_store, :price
end
