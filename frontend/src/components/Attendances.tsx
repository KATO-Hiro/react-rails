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
  constructor(props: {}) {
    super(props);
    this.state = {
      attendances: [],
    };
    this.addNewAttendance = this.addNewAttendance.bind(this);
    this.removeAttendance = this.removeAttendance.bind(this);
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
        <NewAttendanceForm onAddNewAttendance={this.addNewAttendance} />
        <div className="Attendances-container">
          {this.state.attendances.map(attendance => {
            return (
              <Attendance
                attendance={attendance}
                key={attendance.id}
                onRemoveAttendance={this.removeAttendance}
              />
            );
          })}
        </div>
      </div>
    );
  }

  private addNewAttendance = (attendance: AttendanceType) => {
    axios
      .post('http://localhost:3001/api/v1/daily_attendances', {
        daily_attendance: attendance,
      })
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  private removeAttendance = (id: number) => {
    axios
      .delete(`http://localhost:3001/api/v1/daily_attendances/${id}`)
      .then(response => {
        const attendances = this.state.attendances.filter(
          attendance => attendance.id !== id,
        );
        console.log(response);
        this.setState({ attendances });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export default Attendances;
