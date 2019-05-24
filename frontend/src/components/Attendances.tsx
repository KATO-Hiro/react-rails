import * as React from 'react';
import axios from 'axios';

class AttendancesContainer extends React.Component {
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
    return <div className="Attendances-container">attendances</div>;
  }
}

export default AttendancesContainer;
