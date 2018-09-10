module Api
  module V1
    class OrdersController < ApplicationController
      skip_before_action :authenticate_user!

      def index
        @orders = current_user.orders.includes(:order_line_items)
      end

      def show
        @order = Order.find(params[:id])
      end

      def create
        if @order = Order.create(order_params)
          render json: { order: @order }, status: :ok
        else
          render json: { error: error.message }, status: :unprocessable_entity
        end
      end

      private

      def order_params
        params.permit(
          order_line_items: [
            :product_id,
            :quantity
          ]
        )
      end
    end
  end
end
