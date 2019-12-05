import React, { Component } from 'react';
import styled from 'styled-components'
import CharacterOption from './CharacterOption'

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`

class CharacterList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }


  render() {

    const size = (this.props.cols) ? (100 / this.props.cols) - 1 : 19;
    const characters = this.props.characters.map((item, index) => {
      return <CharacterOption size={size} key={'charop-' + index} {...item} selected={index === this.props.current} />
    })

    return (
      <Wrapper>
        {characters}
      </Wrapper>
    );
  }
}

export default React.memo(CharacterList);