class AddProfilePicNameAndLinkToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :profile_pic_name, :string
    add_column :users, :profile_pic_wiki, :string
  end
end
