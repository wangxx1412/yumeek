# frozen_string_literal: true

class Nutrient < ApplicationRecord
  belongs_to :recipe
end
