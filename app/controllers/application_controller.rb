# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :redirect_to_https
  before_action :authenticate_user!

  def redirect_to_https
    redirect_to :protocol => "https://" if Rails.env.production?
  end

  def js_env(opts = {})
    @js_env ||= {}
    @js_env[:params] = params.except('action', 'controller')
    @js_env[:csrf_token] = form_authenticity_token
    @js_env[:current_user] = current_user
    @js_env[:stripe_key] = ENV['STRIPE_PUBLISHABLE_KEY']
    @js_env.deep_merge! opts
    @js_env
  end
  helper_method :js_env
end
