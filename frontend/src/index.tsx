import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AttendancesContainer from './components/Attendances';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AttendancesContainer />, document.getElementById(
  'root',
) as HTMLElement);
registerServiceWorker();
