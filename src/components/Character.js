import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 0.5em 15px;
  height: 100px;
  margin: 2px;
`

const Character = (props) => {
  
  return (
    <Wrapper>
      {props.name}
    </Wrapper>
  );
}

export default Character;