import * as React from 'react';
import axios from 'axios';

interface AttendanceType {
  [index: string]: string | number;
}

interface AttendanceState {
  attendances: AttendanceType[];
}

class Attendances extends React.Component<any, AttendanceState> {
  constructor(props: any) {
    super(props);
    this.state = {
      attendances: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/v1/daily_attendances.json')
      .then(response => {
        console.log(response);
        this.setState({
          attendances: response.data,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="Attendances-container">
        {this.state.attendances.map(attendance => {
          return (
            <div className="Attendance-item" key={attendance.id}>
              <p>{attendance.work_start}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Attendances;
