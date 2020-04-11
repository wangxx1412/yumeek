# frozen_string_literal: true

class CreateUserRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_recipes do |t|
      t.references :user, index: true, foreign_key: true
      t.references :recipe, index: true, foreign_key: true
      t.string :weekday

      t.timestamps
    end
  end
end
