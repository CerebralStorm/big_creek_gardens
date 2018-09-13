require 'rails_helper'

RSpec.describe Message, type: :model do
  context "associations" do
  end

  context "validations" do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:message) }
  end
end
