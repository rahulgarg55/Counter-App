import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './reducers/counterReducer';
import App from './App';

const store = createStore(counterReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store = {store}>  
  <App />
 </Provider>
);

//Provider component is a special wrapper that makes the redux store available to all the components.
// it acts as a bridge between react and redux. 
// store is basically redux store which holds the global state of our app.