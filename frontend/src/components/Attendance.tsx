import * as React from 'react';
interface AttendanceProps {
  attendance: { [index: string]: string | number };
  onRemoveAttendance: (id: number | string) => void;
}

interface AttendanceState {
  [index: string]: string | number;
}

class Attendance extends React.Component<AttendanceProps, AttendanceState> {
  constructor(props: AttendanceProps) {
    super(props);
    this.state = {
      date: this.props.attendance.date,
      work_start: this.props.attendance.work_start,
      work_finish: this.props.attendance.work_finish,
      rest: this.props.attendance.rest,
      daily_wage: this.props.attendance.daily_wage,
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li>日付: {this.state.date}</li>
          <li>勤務開始時刻: {this.state.work_start}</li>
          <li>勤務終了時刻: {this.state.work_finish}</li>
          <li>休憩時間: {this.state.rest}</li>
          <li>日給: {this.state.daily_wage}</li>
        </ul>
        <button
          type="submit"
          onClick={() =>
            this.props.onRemoveAttendance(this.props.attendance.id)
          }
        >
          削除
        </button>
      </div>
    );
  }
}

export default Attendance;
