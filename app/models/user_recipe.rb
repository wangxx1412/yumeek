# frozen_string_literal: true

class UserRecipe < ApplicationRecord
  belongs_to :user
  belongs_to :recipe
end
