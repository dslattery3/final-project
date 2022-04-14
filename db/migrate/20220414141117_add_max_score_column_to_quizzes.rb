class AddMaxScoreColumnToQuizzes < ActiveRecord::Migration[6.1]
  def change
    add_column :quizzes, :max_score, :integer
  end
end
