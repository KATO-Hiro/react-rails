import * as React from 'react';

interface InputValueType {
  [index: string]: string;
}

interface NewAttendanceFormState {
  inputValue: InputValueType;
}

class NewAttendanceForm extends React.Component<any, NewAttendanceFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: {
        work_start: '',
        work_finish: '',
        rest: '',
      },
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="work__start">勤務開始時刻</label>
          <input type="text" onChange={this.onChangeText} />
          <label htmlFor="work_finish">勤務終了時刻</label>
          <input type="text" onChange={this.onChangeText} />
          <label htmlFor="rest">休憩時間</label>
          <input type="text" onChange={this.onChangeText} />
          <button type="submit">送信</button>
        </form>
      </div>
    );
  }

  private onChangeText(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      inputValue: {
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });
  }
}
