# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
require 'faker'

User.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password', admin: true)

categories = %w[Comedy Drama Fantasy Horror Romance Thriller]

categories.each { |category| Category.create(name: category) }

category_ids = Category.ids
20.times do
  Movie.create(
    title: Faker::Movie.title,
    category_id: category_ids.sample,
    description: Faker::Lorem.paragraph(sentence_count: 4)
  )
end
