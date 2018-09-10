module Api
  module V1
    class MessagesController < ApplicationController
      skip_before_action :authenticate_user!

      def create
        if (@message = Message.create(message_params))
          render json: { message: @message }, status: :ok
        else
          render json: { error: error.message }, status: :unprocessable_entity
        end
      end

      private

      def message_params
        params.permit(
          :name,
          :email,
          :message
        )
      end
    end
  end
end
