require 'rails_helper'

RSpec.describe Charge, type: :model do
  context "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:order) }
  end

  context "validations" do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:order) }
  end
end
