/**
 * Tutorial from
 * https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50
 */

import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import registerServiceWorker from './registerServiceWorker';
import style from './style';

ReactDOM.render(<CommentBox />, document.getElementById('root'));
registerServiceWorker();
