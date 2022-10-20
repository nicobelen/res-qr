import { React, useState, useRef, useEffect, useContext } from "react";
import "./LoginForm.css";
import AuthContext from "../../context/AuthProvider";

import axios from "../../api/axios";
const LOGIN_URL = "/#";

export const LoginForm = ({ isShowLogin }) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      setAuth({ user, pwd });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing email or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <>
      {success ? (
        <div className={`${!isShowLogin ? "active" : ""} show`}>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </div>
      ) : (
        <div className={`${!isShowLogin ? "active" : ""} show`}>
          <div className="svgBackground">
            <div className="login-form">
              <div className="form-box solid">
                <form onSubmit={handleSubmit}>
                  <h1 className="login-text">Sign In</h1>
                  <label>Email</label>
                  <br></br>
                  <input
                    type="text"
                    name="email"
                    className="login-box"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />
                  <br></br>
                  <label>Password</label>
                  <br></br>
                  <input
                    type="password"
                    name="password"
                    className="login-box"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                  <br></br>
                  <br></br>
                  <input type="submit" value="LOGIN" className="login-btn" />
                  <br></br>
                  <br></br>
                  <br></br>
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
