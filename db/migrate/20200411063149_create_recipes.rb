# frozen_string_literal: true

class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :label
      t.text :steps
      t.string :img_url
      t.string :src_url
      t.text :health_labels, array: true, default: []
      t.text :ingredients, array: true, default: []

      t.timestamps
    end
  end
end
