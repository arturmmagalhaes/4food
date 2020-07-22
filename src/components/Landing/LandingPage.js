import React from 'react';
import styled from 'styled-components'
import Logo from '../images/logo.png'
import './landing.css'

const Container = styled.div`
    display: flex;
    width: 23.5rem;
    height: 55rem;
    background-color: #e8222e;
    align-items: center;
    justify-content: center;
`

function Landing() {
  return (
    <Container>
        <div>
            <img className="logo" src={Logo} />
        </div>
    </Container>
  );
}

export default Landing;
