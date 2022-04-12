class CreateQuizitems < ActiveRecord::Migration[6.1]
  def change
    create_table :quizitems do |t|
      t.references :item, null: false, foreign_key: true
      t.references :quiz, null: false, foreign_key: true

      t.timestamps
    end
  end
end
