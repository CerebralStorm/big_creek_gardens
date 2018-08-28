# frozen_string_literal: true

Rails.application.routes.draw do
  resources :products
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'static#index'
  get '/contact', to: 'static#index'
  get '/shop', to: 'static#index'
  get '/gallery', to: 'static#index'
  get '/cart', to: 'static#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :products
    end
  end
end
