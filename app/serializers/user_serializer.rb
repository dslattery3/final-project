class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic, :profile_pic_name, :profile_pic_wiki
  has_many :userquizzes
  has_many :useritems
end
