import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Server from './server';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const express = require('express');
const app = express();

const server = http.createServer(app);



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


