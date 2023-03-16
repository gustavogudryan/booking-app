import React, { useContext, useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { i18n } from "../../translate/i18n";

function LoginRegister() {
  //change side
  const [signIn, toggle] = React.useState(false);

  const signUpButton = () => {
    toggle(true);
  };

  const signInButton = () => {
    toggle(false);
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
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className={`container ${signIn ? "sign-up-mode" : ""}`}>
      <div className="form-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">ALL YOU NEED</h2>

            <div className="input-field">
              <FontAwesomeIcon className="i" icon={faUser} />
              <input
                type="text"
                id="username"
                placeholder="Usuário" //{i18n.t("placeholders.username")}
                onChange={handleChange}
              ></input>
            </div>

            <div className="input-field">
              <FontAwesomeIcon className="i" icon={faLock} />
              <input
                type="password"
                id="password"
                placeholder="Senha" //{i18n.t("placeholders.password")}
                onChange={handleChange}
              ></input>
            </div>

            <input
              type="submit"
              value="Login" //{i18n.t("buttons.login")}
              className="btn solid"
              disabled={loading}
              onClick={handleLogin}
            />

            {error && <span>{error.message}</span>}

            <p className="social-text">
              MENSAGEM FODA{/*{i18n.t("messages.signInMessage")}*/}
            </p>

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
                placeholder="Usuario" //{i18n.t("placeholders.username")}
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="email"
                placeholder="email" //{i18n.t("placeholders.email")}
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                placeholder="senha" //{i18n.t("placeholders.password")}
              />
            </div>

            <input
              type="submit"
              className="btn"
              value="cadastrar" //{i18n.t("buttons.signUp")}
            />

            <p className="social-text">
              {/*{i18n.t("messages.signUpMessage")}*/}
            </p>

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
            <h3>novo por aqui{/*{i18n.t("titles.newHere")}*/}</h3>
            <p>
              mensagem foda aquihahha{/*{i18n.t("messages.newHereMessage")}}*/}
            </p>
            <button
              onClick={signUpButton}
              className="btn transparent"
              id="sign-up-btn"
            >
              {" "}
              cadastrar
              {/* {i18n.t("buttons.signUp")} */}
            </button>
          </div>

          {/* <img src="img/log.svg" className="image" alt="" /> */}
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>{/*{i18n.t("titles.oneOfUs")}*/}um de nós</h3>
            <p>
              {/*{i18n.t("messages.oneOfUsMessage")}*/}um de nós mensagem foda
            </p>
            <button
              onClick={signInButton}
              className="btn transparent"
              id="sign-in-btn"
            >
              {" "}
              login
              {/*{i18n.t("buttons.signIn")}*/}
            </button>
          </div>

          {/* <img src="img/register.svg" className="image" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
