import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reactBridge } from '@garfish/bridge';

if (!window.__GARFISH__) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

export const provider = reactBridge({
    React,
    ReactDOM,
    el: '#root',
    rootComponent: App,
    errorBoundary: (error) => {
        console.error(error);
        return <div>发生错误了...</div>;
    },
});
