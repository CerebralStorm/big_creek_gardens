# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :orders
  has_many :charges

  validates :email, uniqueness: true, presence: true
  validates_confirmation_of :password

  serialize :roles
  after_initialize do |_user|
    self.roles ||= []
  end

  # Override Devise Method
  def password_required?
    false
  end

  def city_state_zip
    [city, state, zip].join(', ')
  end
end
