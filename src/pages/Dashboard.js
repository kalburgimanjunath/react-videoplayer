import React from 'react';
import Sidebar from '../components/Sidebar';
import Account from './Account';
import '../css/dashboard.css';
export default function Dashboard() {
  return (
    <div id="wrapper">
      <Sidebar />

      <div id="page-wrapper">
        <div class="container-fluid">
          <div class="row" id="main">
            <div class="col-sm-12 col-md-12 well" id="content">
              <h1>Welcome Admin!</h1>
              <Account />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
