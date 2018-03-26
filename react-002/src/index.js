import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.interceptors.request.use( request => {
  console.log(request)
  // the request can be edited here if we want
  return request
}, error => {
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use( response => {
  console.log(response)
  // the responce can be edited here if we want
  return response
}, error => {
  console.log(error)
  return Promise.reject(error)
})

/* Removing an interceptor:
const myInterceptor = axios.interceptors.request.use( function() { })
axios.interceptors.request.eject(myInterceptor)
*/


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
