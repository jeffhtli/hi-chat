import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ChatRoom from './ChatRoom';

ReactDOM.render(<ChatRoom />, document.getElementById('root'));
registerServiceWorker();
