import React from 'react';
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  padding-top: 20px;
`
const Title = styled.h1`
  margin-bottom: 10px;
`

const Header = (props) => {
  
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <nav>
        <ul>
          <li><a href="index.html">Actualiad</a></li>
          <li><a href="#">Política</a></li>
          <li><a href="#">Deportes</a></li>
          <li><a href="#">Género</a></li>
          <li><a href="#">Salud</a></li>
          <li><a href="#">Tecnología</a></li>
          <li><a href="#">Cultura</a></li>
          <li><a href="#">Internacionales</a></li>
          <li><a href="#">Viral</a></li>
        </ul>
      </nav>
    </Wrapper>
  );
}

export default Header;