import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/css/bootstrap-datetimepicker.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/font-awesome.min.css';
import './assets/css/feathericon.min.css';
import './assets/css/select2.min.css';
import './assets/css/custom.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import store from './app/store';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
