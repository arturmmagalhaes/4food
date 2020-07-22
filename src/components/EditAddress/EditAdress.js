import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "../Hooks/useForm";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";
import axios from "axios";

import Header from "../Header/Header";
import Footer from "../Footer/Footer"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const token = window.localStorage.getItem("token");
const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.5rem;
  height: 55rem;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const EditAddress = () => {
  const classes = useStyles();

  useEffect(() => {
    registerAddress();
  }, []);

  const history = useHistory();
  const goToProfile = () => {
    history.push("/profile");
  };

  const { form, onChange } = useForm({
    street: "",
    number: undefined,
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };
  const handleFormValues = (event) => {
    event.preventDefault();
    registerAddress();
    goToProfile();
  };

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };

  const registerAddress = () => {
    axios
      .put(`${baseUrl}/address`, form, axiosConfig)
      .then((response) => {
        alert("Endereço registrado com sucesso!");
        window.localStorage.setItem("address", response.data.user);
        console.log(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Header BackArrow="True" PageToLink="profile" title="Endereço" />
      <ContainerForm onSubmit={handleFormValues}>
        <TextField
          className="style-input"
          required
          id="outlined-required"
          label="Logradouro"
          variant="outlined"
          value={form.street}
          name="street"
          onChange={handleInputChange}
          placeholder="Rua / Av."
        />
        <TextField
          className="style-input"
          required
          id="outlined-required"
          label="Número"
          variant="outlined"
          type="number"
          value={form.number}
          name="number"
          onChange={handleInputChange}
          placeholder="Número"
        />
        <TextField
          className="style-input"
          id="outlined-required"
          label="Complemento"
          variant="outlined"
          value={form.complement}
          name="complement"
          onChange={handleInputChange}
          placeholder="Apto. / Bloco"
        />
        <TextField
          className="style-input"
          required
          id="outlined-required"
          label="Bairro"
          variant="outlined"
          value={form.neighbourhood}
          name="neighbourhood"
          onChange={handleInputChange}
          placeholder="Bairro"
        />
        <TextField
          className="style-input"
          required
          id="outlined-required"
          label="Logradouro"
          variant="outlined"
          value={form.city}
          name="city"
          onChange={handleInputChange}
          placeholder="Cidade"
        />
        <TextField
          className="style-input"
          required
          id="outlined-required"
          label="Estado"
          variant="outlined"
          value={form.state}
          name="state"
          onChange={handleInputChange}
          placeholder="Estado"
        />
        <button className="style-button">Salvar</button>
      </ContainerForm>
      <Footer/>
    </Container>
  );
};

export default EditAddress;
