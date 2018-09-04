module Api
  module V1
    class ChargesController < ApplicationController
      skip_before_action :authenticate_user!

      def create
        response = StripeChargesServices.new(charges_params, current_user).call
        render json: { response: response }, status: :ok
      rescue Stripe::CardError => error
        render json: { error: error.message }, status: :unprocessable_entity
      end

      private

      def charges_params
        params.permit!
        # params.permit(
        #   :stripe_token,
        #   user: [
        #     :name,
        #     :address_line1,
        #     :address_city,
        #     :address_state,
        #     :address_zip,
        #     :address_country
        #   ]
        # )
      end
    end
  end
end
