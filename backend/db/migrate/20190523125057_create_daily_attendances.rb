class CreateDailyAttendances < ActiveRecord::Migration[5.2]
  def change
    create_table :daily_attendances do |t|
      t.date :date, null: false
      t.time :work_start, null: false
      t.time :work_finish, null: false
      t.time :rest, null: false
      t.integer :daily_wage, null: false

      t.timestamps
    end
  end
end
