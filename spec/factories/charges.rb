FactoryBot.define do
  factory :charge do
    user_id { 1 }
    amount { 1.5 }
    currency { 'MyString' }
    description { 'MyString' }
  end
end
