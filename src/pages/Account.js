import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
export default function Account() {
  const sidebar = [
    'Edit Account',
    'Notifications',
    'Change Type',
    'Password & Privacy',
  ];
  const AccountSidebar = sidebar.map((curr) => {
    return (
      <li key={curr}>
        <Link to="#">{curr}</Link>
      </li>
    );
  });

  return (
    <div>
      <div className="account">
        <h1>Account Overview</h1>
        <div>
          <ul>{AccountSidebar}</ul>
        </div>
        <h3>Logged in as : Manjunath Kalburgi</h3>
        <Avatar />
      </div>
    </div>
  );
}
