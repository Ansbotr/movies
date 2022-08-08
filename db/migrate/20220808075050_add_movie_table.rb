class AddMovieTable < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.text :description
      t.references :category, null: false, foreign_key: true

      t.timestamps null: false
    end
  end
end
