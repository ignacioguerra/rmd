import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0.5em 15px;
  height: 100px;
  width:16%;
  text-align: center;
  margin: 0.33%;
  float: left;
  border: ${props => props.selected ? '2px solid #f00' : '1px solid #000'};
  background-color: ${props => props.selected ? '#fafafa' : 'auto'};
`

const CharacterOption = (props) => {
  
  return (
    <Wrapper selected={props.selected}>
      {props.name}
    </Wrapper>
  );
}

export default CharacterOption;