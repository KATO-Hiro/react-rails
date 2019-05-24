module Api::V1
  class DailyAttendancesController < ApplicationController
    before_action :set_attendance, only: [:update, :destroy]

    def index
      @attendances = DailyAttendance.all

      render json: @attendances
    end

    def create
      @attendance = DailyAttendance.new(attendance_params)

      if @attendance.save
        render json: @attendance, statttus: :created
      else
        render json: @attendance.errors, status: :unprocessible_entity
      end
    end

    def update
      if @attendance.update(attendance_params)
        render json: @attendance
      else
        render json: @attendance.errors, status: :unprocessible_entity
      end
    end

    def destroy
      @attendance.destroy
      if @attendance.destroy
        head :no_content, status: :ok
      else
        render json: @attendance.errors, status: :unprocessible_entity
      end
    end

    private
      def set_attendance
        @attendance = DailyAttendance.find(params[:id])
      end

      def attendance_params
        params.require(:attendance)
              .permit(
                :date,
                :work_start,
                :work_finish,
                :rest,
                :daily_wage
              )
      end
  end
end