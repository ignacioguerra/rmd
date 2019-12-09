import React from 'react';
import styled from 'styled-components'
import HeaderNav from './HeaderNav';
import HeaderFeed from './HeaderFeed';
import UserMenu from './UserMenu';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  padding-top: 20px;
`
const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
`

const Header = (props) => {
  
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <HeaderNav />
      <UserMenu />
      <HeaderFeed />
    </Wrapper>
  );
}

export default Header;