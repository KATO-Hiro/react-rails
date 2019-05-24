import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Attendances from './components/Attendances';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Attendances />, document.getElementById(
  'root',
) as HTMLElement);
registerServiceWorker();
