import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className="footer">
      <Link to="./account">My Account</Link>
    </div>
  );
}
