import React from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';
export default function Login() {
  return (
    <div>
      <form action="./dashboard">
        <div id="login">
          {/* <h3 className="text-center text-white pt-5">Login form</h3> */}
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label className="text-info">Username:</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-info">Password:</label>
                    <br />
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-info">
                      <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span>
                    </label>
                    <br />
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      value="Login"
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <Link to="signup" className="text-info">
                      Register here
                    </Link>
                    {/* <a href="#" className="text-info">
                        Register here
                      </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
