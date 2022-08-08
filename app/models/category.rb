class Category < ApplicationRecord
  has_many :movies

  validates :name, presence: true, unique: true
end
