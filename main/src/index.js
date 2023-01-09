import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Garfish from 'garfish';

ReactDOM.render(<App />, document.getElementById('root'));

Garfish.run({
    basename: '/',
    domGetter: '#container',
    apps: [
        {
            name: 'app',
            activeWhen: '/sub',
            entry: 'http://localhost:3002',
        },
    ],
    props: {
        msg: 'hellom ',
    },
    sandbox: {
        fixBaseUrl: true,
    },
});
