import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import axios from "axios";
import Logo from "../../assets/images/logo-invert/logo-invert.png";
import "./login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.5rem;
  height: 55rem;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB";

function LoginPage() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const nextPage = () => {
    history.push("/feed");
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const login = async () => {
    const loginBody = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(`${baseUrl}/login`, loginBody);
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("user", JSON.stringify(response.data.user));
      alert("logado");
      nextPage();
    } catch (error) {
      console.log(error);
      alert("falha ao logar");
    }
  };

  return (
    <Container>
      <FormContainer>
        <img src={Logo} className="imageLogo" alt="logotipo ifuture" />
        <h4 className="style-tittle">Entrar</h4>
        <TextField
          className="style-input"
          required
          id="outlined-required"
          label="E-mail"
          variant="outlined"
          value={email}
          onChange={handleEmail}
          placeholder="email@email.com"
        />
        <TextField
          className="style-input"
          required
          type="password"
          id="outlined-required"
          label="Senha"
          variant="outlined"
          value={password}
          onChange={handlePassword}
          placeholder="Mínimo 6 caracteres"
        />
        <button onClick={login} className="style-button">
          Entrar
        </button>
        <Link to="/signup" className="link-text">
          <p className="style-text">Não possui cadastro? Clique aqui.</p>
        </Link>
      </FormContainer>
    </Container>
  );
}

export default LoginPage;
