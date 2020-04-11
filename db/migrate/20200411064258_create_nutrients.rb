# frozen_string_literal: true

class CreateNutrients < ActiveRecord::Migration[5.2]
  def change
    create_table :nutrients do |t|
      t.references :recipe, index: true, foreign_key: true
      t.integer :protein
      t.integer :fiber
      t.integer :carbs
      t.integer :fat
      t.integer :energies
      t.string :img_url

      t.timestamps
    end
  end
end
