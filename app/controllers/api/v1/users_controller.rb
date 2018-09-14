module Api
  module V1
    class UsersController < ApplicationController
      def update
        # Not Safe
        @user = User.find(params[:id])
        if @user.update(user_params)
          render json: { user: @user }, status: :ok
        else
          render json: { error: @user.errors }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(
          :phone,
          :name,
          :email,
          :address,
          :city,
          :state,
          :zip
        )
      end
    end
  end
end
