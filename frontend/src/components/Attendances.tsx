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
    this.editAttendance = this.editAttendance.bind(this);
  }

  async componentDidMount() {
    try {
      console.log('Loading ...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await axios.get(
        'http://localhost:3001/api/v1/daily_attendances',
      );
      console.log(response);
      this.setState({
        attendances: response.data,
      });
    } catch (error) {
      console.log(error);
    }
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
                onEditAttendance={this.editAttendance}
              />
            );
          })}
        </div>
      </div>
    );
  }

  private addNewAttendance = async (attendance: AttendanceType) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/daily_attendances',
        {
          daily_attendance: attendance,
        },
      );
      const attendances = [...this.state.attendances, response.data];
      console.log(response);
      this.setState({ attendances });
    } catch (error) {
      console.log(error);
    }
  };

  private removeAttendance = async (id: number) => {
    try {
      const response = axios.delete(
        `http://localhost:3001/api/v1/daily_attendances/${id}`,
      );
      const attendances = this.state.attendances.filter(
        attendance => attendance.id !== id,
      );
      console.log(response);
      this.setState({ attendances });
    } catch (error) {
      console.log(error);
    }
  };

  private editAttendance = async (attendance: AttendanceType) => {
    try {
      const response = axios.put(
        `http://localhost:3001/api/v1/daily_attendances/${attendance.id}`,
        {
          daily_attendance: attendance,
        },
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}

export default Attendances;
