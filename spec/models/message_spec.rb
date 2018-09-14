require 'rails_helper'

RSpec.describe Message, type: :model do
  # describe 'associations' do
  # end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:message) }
  end
end
