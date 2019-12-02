import React, { Component } from 'react';
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap';
import CharacterOption from './CharacterOption'

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  overflow: hidden;
`

class CharacterMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }


  render() {

    const characters = this.props.characters.map((item, index) => {
      return <CharacterOption key={item.name} {...item} selected={index === this.props.current} />
    })

    return (
      <Wrapper>
        {characters}
      </Wrapper>
    );
  }
}

export default CharacterMenu;