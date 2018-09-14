module Api
  module V1
    class MessagesController < ApplicationController
      skip_before_action :authenticate_user!

      def create
        @message = Message.new(message_params)
        if @message.save
          render json: { message: @message }, status: :ok
        else
          render json: { error: @message.errors }, status: :unprocessable_entity
        end
      end

      private

      def message_params
        params.require(:message).permit(
          :name,
          :email,
          :message
        )
      end
    end
  end
end
