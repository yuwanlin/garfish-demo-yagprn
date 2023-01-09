import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
// import Garfish from 'garfish';

ReactDOM.render(<App />, document.getElementById('root'));

// setTimeout(() => {
//   Garfish.run({
//     basename: '/',
//     domGetter: '#container',
//     apps: [
//       {
//         name: 'app',
//         activeWhen: '/',
//         entry: 'http://localhost:3002',
//       },
//     ],
//     sandbox: {
//       fixBaseUrl: true,
//     },
//   });
// }, 1000);
