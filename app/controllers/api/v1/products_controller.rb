class Api::V1::ProductsController < ApplicationController
  skip_before_action :authenticate_user!
  def index
    @products = Product.all
  end
end
