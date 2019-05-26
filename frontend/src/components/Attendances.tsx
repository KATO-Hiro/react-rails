import * as React from 'react';
import axios from 'axios';
import NewAttendanceForm from './NewAttendanceForm';
import Attendance from './Attendance';

interface AttendanceType {
  [index: string]: string | number;
}

interface AttendanceState {
  attendances: AttendanceType[];
}

class Attendances extends React.Component<{}, AttendanceState> {
  constructor(props: any) {
    super(props);
    this.state = {
      attendances: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/v1/daily_attendances')
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
      <div>
        <NewAttendanceForm />
        <div className="Attendances-container">
          {this.state.attendances.map(attendance => {
            return <Attendance {...attendance} key={attendance.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Attendances;
