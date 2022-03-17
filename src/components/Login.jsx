import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../Api";
import "./Login.css";
const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: "",
    cpf: "",
    senha: "",
  });
  const [resultOfLogin, setResultOfLogin] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    api.post("/", login).then((dados) => {
      if (dados.data.isLogged) {
        localStorage.setItem("session", dados.data.token);
        history.push("/main");
      } else {
          setResultOfLogin('Não logado!');
        history.push("/");
      }
    });
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form onSubmit={handleOnSubmit} method="post">
          <input
            type="email"
            className="form-control"
            name="login"
            placeholder="login"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <input
            type="password"
            className="form-control"
            name="login"
            placeholder="password"
            value={login.senha}
            onChange={(e) => setLogin({ ...login, senha: e.target.value })}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        {resultOfLogin.length > 0 ? (
          <div className="alert alert-danger">{resultOfLogin}</div>
        ) : (
          ""
        )}

        <div id="formFooter">
          <a class="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
