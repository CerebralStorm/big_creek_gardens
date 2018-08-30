module Api
  module V1
    class ChargesController < ApplicationController
      skip_before_action :authenticate_user!
      rescue Stripe::CardError => e
        render json: {error: message}, status: :unprocessable_entity
      end

      def create
        response = StripeChargesServices.new(charges_params).call
        render json: {response: response}, status: :ok
      end

    private
      def charges_params
        params.permit(
          :stripe_token,
          user: [
            :name,
            :address_line1,
            :address_city,
            :address_state,
            :address_zip,
            :address_country
          ],
          :charge [
            :amount,
            :currency,
            :description
          ])
      end
    end
  end
end
