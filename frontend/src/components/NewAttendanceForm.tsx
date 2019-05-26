import * as React from 'react';
import axios from 'axios';

interface NewAttendanceFormState {
  [index: string]: string;
}

class NewAttendanceForm extends React.Component<any, NewAttendanceFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '',
      work_start: '',
      work_finish: '',
      rest: '',
      daily_wage: '',
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="date">勤務日</label>
          <input name="date" type="text" onChange={this.onChangeText} />
          <label htmlFor="work__start">勤務開始時刻</label>
          <input name="work_start" type="text" onChange={this.onChangeText} />
          <label htmlFor="work_finish">勤務終了時刻</label>
          <input name="work_finish" type="text" onChange={this.onChangeText} />
          <label htmlFor="rest">休憩時間</label>
          <input name="rest" type="text" onChange={this.onChangeText} />
          <label htmlFor="rest">日給</label>
          <input name="daily_wage" type="text" onChange={this.onChangeText} />
          <button type="submit" onClick={this.onSubmit}>
            送信
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

  private onSubmit() {
    const newAttendance = {
      date: this.state.date,
      work_start: this.state.work_start,
      work_finish: this.state.work_finish,
      rest: this.state.rest,
      daily_wage: this.state.daily_wage,
    };

    axios
      .post('http://localhost:3001/api/v1/daily_attendances', {
        daily_attendance: newAttendance,
      })
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default NewAttendanceForm;
