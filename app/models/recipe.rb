# frozen_string_literal: true

class Recipe < ApplicationRecord
  has_one :nutrient, dependent: :destroy
  has_many :user_recipes, dependent: :destroy
  has_many :users, through: :user_recipes
end
