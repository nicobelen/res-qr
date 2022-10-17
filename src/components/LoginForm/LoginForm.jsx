import React from "react";
import "./LoginForm.css";

export const LoginForm = ({ isShowLogin }) => {
  return (
    <div className={`${!isShowLogin ? "active" : ""} show`}>
      <div className="svgBackground">
        <div className="login-form">
          <div className="form-box solid">
            <form>
              <h1 className="login-text">Sign In</h1>
              <label>Email</label>
              <br></br>
              <input type="text" name="email" className="login-box" />
              <br></br>
              <label>Password</label>
              <br></br>
              <input type="password" name="password" className="login-box" />
              <br></br>
              <br></br>
              <input type="submit" value="LOGIN" className="login-btn" />
              <br></br>
              <br></br>
              <br></br>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
