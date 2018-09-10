# frozen_string_literal: true

Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'static#index'
  get '/contact', to: 'static#index'
  get '/shop', to: 'static#index'
  get '/gallery', to: 'static#index'
  get '/cart', to: 'static#index'
  get '/checkout', to: 'static#index'
  get '/confirmation/:id', to: 'static#index'
  get '/orders/:id', to: 'static#index'
  get '/account', to: 'static#index'
  get '/unauthorized', to: 'static#index', as: :unauthorized

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :products
      resources :charges
      resources :orders
      resources :messages
      resources :users
    end
  end
end
