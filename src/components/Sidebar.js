import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
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
          <Link to="./dashboard">
            <i class="fa fa-bar-chart-o"></i>
          </Link>
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

      <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav side-nav">
          <li>
            <Link to="./dashboard">
              <i class="fa fa-fw fa-user-plus"></i> Dashboard
            </Link>
          </li>
          {/* <li>
            <a href="#" data-toggle="collapse" data-target="#submenu-1">
              <i class="fa fa-fw fa-search"></i> MENU 1{' '}
              <i class="fa fa-fw fa-angle-down pull-right"></i>
            </a>
            <ul id="submenu-1" class="collapse in">
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> SUBMENU 1.1
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> SUBMENU 1.2
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> SUBMENU 1.3
                </a>
              </li>
            </ul>
          </li> */}
          <li>
            <a href="#" data-toggle="collapse" data-target="#submenu-2">
              <i class="fa fa-fw fa-star"></i> MENU 2{' '}
              <i class="fa fa-fw fa-angle-down pull-right"></i>
            </a>
            <ul id="submenu-2" class="collapse in">
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> SUBMENU 2.1
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> SUBMENU 2.2
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> SUBMENU 2.3
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="investigaciones/favoritas">
              <i class="fa fa-fw fa-user-plus"></i> MENU 3
            </a>
          </li>
          <li>
            <a href="sugerencias">
              <i class="fa fa-fw fa-paper-plane-o"></i> MENU 4
            </a>
          </li>
          <li>
            <a href="faq">
              <i class="fa fa-fw fa fa-question-circle"></i> MENU 5
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
