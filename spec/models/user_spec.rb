# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'associations' do
    it { is_expected.to have_many(:orders) }
    it { is_expected.to have_many(:charges) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:email) }
  end

  describe '#password_required?' do
    it 'is false so guest users can be created' do
      expect(User.new.password_required?).to eq false
    end
  end
end
