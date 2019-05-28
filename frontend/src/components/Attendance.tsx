import * as React from 'react';
interface AttendanceProps {
  attendance: { [index: string]: string | number };
  onRemoveAttendance: (id: number | string) => void;
  onEditAttendance: (attendance: { [index: string]: string | number }) => void;
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
    this.onChangeText = this.onChangeText.bind(this);
  }

  render() {
    const editedAttendance = {
      id: this.props.attendance.id,
      date: this.state.date,
      work_start: this.state.work_start,
      work_finish: this.state.work_finish,
      rest: this.state.rest,
      daily_wage: this.state.daily_wage,
    };

    return (
      <div>
        <form>
          <label htmlFor="date">勤務日</label>
          <input
            name="date"
            type="text"
            onChange={this.onChangeText}
            value={this.state.date}
          />
          <label htmlFor="work__start">勤務開始時刻</label>
          <input
            name="work_start"
            type="text"
            onChange={this.onChangeText}
            value={this.state.work_start}
          />
          <label htmlFor="work_finish">勤務終了時刻</label>
          <input
            name="work_finish"
            type="text"
            onChange={this.onChangeText}
            value={this.state.work_finish}
          />
          <label htmlFor="rest">休憩時間</label>
          <input
            name="rest"
            type="text"
            onChange={this.onChangeText}
            value={this.state.rest}
          />
          <label htmlFor="rest">日給</label>
          <input
            name="daily_wage"
            type="text"
            onChange={this.onChangeText}
            value={this.state.daily_wage}
          />
          <button
            type="submit"
            onClick={() =>
              this.props.onRemoveAttendance(this.props.attendance.id)
            }
          >
            削除
          </button>
          <button onClick={() => this.props.onEditAttendance(editedAttendance)}>
            変更
          </button>
        </form>
      </div>
    );
  }

  private onChangeText(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }
}

export default Attendance;
