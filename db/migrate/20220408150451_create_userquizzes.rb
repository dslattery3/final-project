class CreateUserquizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :userquizzes do |t|
      t.references :user, null: false, foreign_key: true
      t.references :quiz, null: false, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end
