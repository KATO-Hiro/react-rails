import * as React from 'react';

interface AttendanceType {
  [index: string]: string | number;
}

export default function Attendance(attendance: AttendanceType) {
  return (
    <div>
      <ul>
        <li>日付: {attendance.date}</li>
        <li>勤務開始時刻: {attendance.work_start}</li>
        <li>勤務終了時刻: {attendance.work_finish}</li>
        <li>休憩時間: {attendance.rest}</li>
        <li>日給: {attendance.daily_wage}</li>
      </ul>
    </div>
  );
}
