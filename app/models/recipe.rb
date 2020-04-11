# frozen_string_literal: true

class Recipe < ApplicationRecord
  has_many :nutrients
  has_many :users, through: :user_recipes
end
