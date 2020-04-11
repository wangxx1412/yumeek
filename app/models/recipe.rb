# frozen_string_literal: true

class Recipe < ApplicationRecord
  has_one :nutrients
  has_many :user_recipes
  has_many :users, through: :user_recipes
end
