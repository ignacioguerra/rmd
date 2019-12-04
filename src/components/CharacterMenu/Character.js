import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  position: sticky;
  top: 1em;
  // border: 1px solid #ddd;
`
const PicWrapper = styled.div`
  padding: 5px;
  background-color: #fafafa;
  border: 1px solid #ddd;
  margin-bottom: 1em;
`
const Pic = styled.img`
  display: block;
  width: 100%;
`

const Character = (props) => {
  
  return (
    <Wrapper>
      <PicWrapper>
        <Pic src="https://www.baenegocios.com/__export/1560127967538/sites/cronica/img/2019/06/09/pag4.jpg?__scale=c:transparent,w:NaN,h:732,t:3,p:0,q:80" />
      </PicWrapper>
      <h2>{props.name}</h2>
      {props.role}
    </Wrapper>
  );
}

export default Character;