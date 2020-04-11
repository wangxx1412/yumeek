# frozen_string_literal: true

class RemoveImgUrlFromNutrients < ActiveRecord::Migration[5.2]
  def change
    remove_column :nutrients, :img_url, :string
  end
end
