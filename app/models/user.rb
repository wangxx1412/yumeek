# frozen_string_literal: true

class User < ApplicationRecord
  has_many :recipes, through: :user_recipes
end

# EXAMPLE

# # app/model/programmer.rb
# class Programmer < ActiveRecord::Base
#   has_many :projects
#   has_many :clients, through: :projects
# end

# # app/model/client.rb
# class Client < ActiveRecord::Base
#   has_many :projects
#   has_many :programmers, through: :projects
# end

# # app/model/project.rb
# class Projects < ActiveRecord::Base
#   belongs_to :programmer
#   belongs_to :client
# end

# programmer = Programmer.create(name: 'Josh Frankel')
# client     = Client.create(name: 'Mr. Nic Cage')

# programmer.projects.create(client: client)
