import React, { useContext, useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faTriangleExclamation,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import i18n from "../../translate/i18n";
import loginImage from "./img/loginimage.png";
import location from "./img/location.png";
import tick from "./img/404-tick.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function LoginRegister() {
  //change side
  const [signIn, toggle] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const signUpButton = () => {
    toggle(true);
  };

  const signInButton = () => {
    toggle(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    navigate("/");
  };

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      handleOpen();
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className={`container ${signIn ? "sign-up-mode" : ""}`}>
      <div className="form-container">
        <div className={`popup ${open ? "open-popup" : ""}`}>
          <img src={tick} alt="404-tick" />
          <h2>{i18n.t("messages.thanks")}</h2>
          <p>{i18n.t("messages.loginMessage")}</p>
          <button onClick={handleClose} type="button">
            OK
          </button>
        </div>

        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">ALL YOU NEED</h2>

            <div className="input-field">
              <FontAwesomeIcon className="i" icon={faUser} />
              <input
                type="text"
                id="username"
                placeholder={i18n.t("placeholders.username")}
                onChange={handleChange}
              ></input>
            </div>

            <div className="input-field">
              <FontAwesomeIcon className="i" icon={faLock} />
              <input
                type="password"
                id="password"
                placeholder={i18n.t("placeholders.password")}
                onChange={handleChange}
              ></input>
            </div>

            <input
              type="submit"
              value={i18n.t("buttons.login")}
              className="btn solid"
              disabled={loading}
              onClick={handleLogin}
            />

            {error && (
              <span className="messageError">
                <FontAwesomeIcon icon={faTriangleExclamation} />
                {i18n.t("error.errorMessage")}
              </span>
            )}

            <p className="social-text">{i18n.t("messages.signInMessage")}</p>

            <div className="social-media">
              <a href={<LoginRegister />} className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={<LoginRegister />} className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={<LoginRegister />} className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href={<LoginRegister />} className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">ALL YOU NEED</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} />
              <input
                type="text"
                placeholder={i18n.t("placeholders.username")}
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder={i18n.t("placeholders.email")} />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                placeholder={i18n.t("placeholders.password")}
              />
            </div>

            <input
              type="submit"
              className="btn"
              value={i18n.t("buttons.signUp")}
            />

            <p className="social-text">{i18n.t("messages.signUpMessage")}</p>

            <div className="social-media">
              <a href={<LoginRegister />} className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={<LoginRegister />} className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={<LoginRegister />} className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href={<LoginRegister />} className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>{i18n.t("titles.newHere")}</h3>
            <p>{i18n.t("messages.newHereMessage")}</p>
            <button
              onClick={signUpButton}
              className="btn transparent"
              id="sign-up-btn"
            >
              {" "}
              {i18n.t("buttons.signUp")}
            </button>
          </div>

          <img src={loginImage} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>{i18n.t("titles.oneOfUs")}</h3>
            <p>{i18n.t("messages.oneOfUsMessage")}</p>
            <button
              onClick={signInButton}
              className="btn transparent"
              id="sign-in-btn"
            >
              {" "}
              {i18n.t("buttons.signIn")}
            </button>
          </div>

          <img
            src={location}
            style={{ width: "65%" }}
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
