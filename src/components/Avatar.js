import React from 'react';
import { Link } from 'react-router-dom';
export default function Avatar() {
  return (
    <div className="avatar">
      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
      <div>
        <div>Manjunath Kalburgi</div>
        <div>kalburgimanjunath@gmail.com</div>
        <Link to="">Update Password</Link>
      </div>
    </div>
  );
}
