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
  `
  const Pic = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 1em;
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