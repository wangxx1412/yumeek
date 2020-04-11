# frozen_string_literal: true

class Recipe < ApplicationRecord
  has_many :nutrients
  has_many :user_recipes
end
