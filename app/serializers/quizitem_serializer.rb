class QuizitemSerializer < ActiveModel::Serializer
  attributes :id, :image
  # has_one :item
  # has_one :quiz

  def image
    object.item.image_url
  end

end
