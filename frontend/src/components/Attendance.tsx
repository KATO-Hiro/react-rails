import * as React from 'react';

interface AttendanceType {
  [index: string]: string | number;
}

interface AttendanceProps {
  attendance: AttendanceType;
}

interface AttendanceState {
  [index: string]: string | number;
}

class Attendance extends React.Component<AttendanceProps, AttendanceState> {
  constructor(props: any) {
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
          <li>日付: {this.props.attendance.date}</li>
          <li>勤務開始時刻: {this.props.attendance.work_start}</li>
          <li>勤務終了時刻: {this.props.attendance.work_finish}</li>
          <li>休憩時間: {this.props.attendance.rest}</li>
          <li>日給: {this.props.attendance.daily_wage}</li>
        </ul>
      </div>
    );
  }
}

export default Attendance;
