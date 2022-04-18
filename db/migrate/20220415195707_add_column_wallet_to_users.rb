class AddColumnWalletToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :wallet, :integer
  end
end
