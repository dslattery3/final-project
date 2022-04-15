class AddColumnFromStoreToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :from_store, :boolean
  end
end
