# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

puts 'Seeding Data ...'

# Users

user1 = User.create(
  first_name: 'Jane',
  last_name: 'Doe',
  email: 'janedoe@email.com',
  password: 'pw1234',
  img_url: open_asset('apparel1.jpg')
)

# Recipes
