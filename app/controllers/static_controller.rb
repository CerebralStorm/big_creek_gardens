# frozen_string_literal: true

class StaticController < ApplicationController
  skip_before_action :authenticate_user!
  def index; end
end
