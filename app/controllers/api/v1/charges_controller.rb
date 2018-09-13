module Api
  module V1
    class ChargesController < ApplicationController
      skip_before_action :authenticate_user!

      def create
        charge = StripeChargesServices.new(charges_params, current_user).call
        render json: { charge: charge }, status: :ok
      rescue Stripe::CardError => error
        render json: { error: error.message }, status: :unprocessable_entity
      end

      private

      # rubocop:disable Metrics/MethodLength
      def charges_params
        params.permit(
          :stripe_token,
          order_line_items_attributes: [:product_id, :quantity],
          user: [
            :email,
            :name,
            :phone,
            :address,
            :city,
            :state,
            :zip
          ]
        )
      end
      # rubocop:enable Metrics/MethodLength
    end
  end
end
