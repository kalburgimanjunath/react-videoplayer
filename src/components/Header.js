import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      {/* <Link to="./account">My Account</Link> | <Link to="./login">Logout</Link> */}
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-ex1-collapse"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="https://bryanrojasq.wordpress.com">
          Atahska
        </a>
      </div>

      <ul class="nav navbar-right top-nav">
        <li>
          <a
            href="#"
            data-placement="bottom"
            data-toggle="tooltip"
            href="#"
            data-original-title="Stats"
          >
            <i class="fa fa-bar-chart-o"></i>
          </a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            Admin User <b class="fa fa-angle-down"></b>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="#">
                <i class="fa fa-fw fa-user"></i> Edit Profile
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-fw fa-cog"></i> Change Password
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">
                <i class="fa fa-fw fa-power-off"></i> Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
