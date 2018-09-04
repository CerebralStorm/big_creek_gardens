module Api
  module V1
    class OrdersController < ApplicationController
      skip_before_action :authenticate_user!

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
