import React, { useState, useEffect } from "react";
import {
  Container,
  TitleProfile,
  PerfilStyle,
  Rectangle,
  EnderecoCadastrado,
  Endereco,
  Pedido,
  Text,
  PedidosCard,
  RestaurantName,
  Day,
  SubTotal,
  CardsStyled,
  CardsStyled2,
  Img,
} from "../Profile/styled";
import editIcon from "../../assets/Profile/edit.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// import { Container } from './styles';

function ProfilePage() {
  const [profile, setProfile] = useState("");
  const [historys, setHistorys] = useState([]);

  const history = useHistory();
  const goToProfileEdit = () => {
    history.push("/editProfile");
  };
  const goToAddressEdit = () => {
    history.push("/editAddress");
  };

  const getProfile = () => {
    const token = window.localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile",
        axiosConfig
      )
      .then((response) => {
        setProfile(response.data.user);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getHistorys = () => {
    const token = window.localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history",
        axiosConfig
      )
      .then((response) => {
        setHistorys(response.data.orders);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProfile();
    getHistorys();
  }, []);

  return (
    <>
      <Container>
        <Header title="Meu Perfil" />
        <CardsStyled>
          <PerfilStyle>
            {profile.name} <Img onClick={goToProfileEdit} src={editIcon} />
          </PerfilStyle>
          <PerfilStyle>{profile.email}</PerfilStyle>
          <PerfilStyle>{profile.cpf}</PerfilStyle>
        </CardsStyled>
        <CardsStyled2>
          <EnderecoCadastrado>
            Endereço Cadastrado
            <Img onClick={goToAddressEdit} src={editIcon} />
          </EnderecoCadastrado>
          <Endereco>{profile.address}</Endereco>
        </CardsStyled2>
        <Pedido>Histórico de pedidos</Pedido>
        <hr></hr>
        <CardsStyled>
          <Text>
            {historys.length > 0
              ? historys.map((order) => {
                  const date = new Date(order.expiresAt).toLocaleDateString(
                    "pt-br"
                  );
                  return (
                    <PedidosCard>
                      <Rectangle>
                        <RestaurantName>{order.restaurantName}</RestaurantName>
                        <Day>{date}</Day>
                        <SubTotal>
                          <p>SUBTOTAL R${order.totalPrice}</p>
                        </SubTotal>
                      </Rectangle>
                    </PedidosCard>
                  );
                })
              : "Você não realizou nenhum pedido "}
          </Text>
        </CardsStyled>
      </Container>
      <Footer currentPage="profile" />
    </>
  );
}

export default ProfilePage;
