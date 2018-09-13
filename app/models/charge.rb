class Charge < ApplicationRecord
  belongs_to :order
  belongs_to :user

  validates :order, presence: true
  validates :user, presence: true
end
