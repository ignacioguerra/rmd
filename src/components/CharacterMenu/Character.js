import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  position: sticky;
  top: 10px;
  // border: 1px solid #ddd;
`
const PicWrapper = styled.div`
  padding: 5px;
  background-color: #fafafa;
  border: 1px solid #ddd;
`
const Pic = styled.img`
  display: block;
  width: 100%;
  margin: 5px 0 1em;
`

const Character = (props) => {
  
  return (
    <Wrapper>
      <Pic src={require('../../assets/img/' + props.img.big)} />
      <h2>{props.name}</h2>
      {props.role}
    </Wrapper>
  );
}

export default React.memo(Character);