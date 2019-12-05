import React, { Component } from 'react';
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap';
import CharacterList from './CharacterList';
import Character from './Character';

const Wrapper = styled(Row)`
  padding-top: 1em;
  padding-bottom: 2em;
  margin-bottom: 2em;
  position: relative;
  
  &::after {
    content:"";
    display:block;
    position: absolute;
    border-bottom: 1px solid #ddd;
    bottom: 0;
    left: 15px;
    right: 15px;
  }
`

class CharacterMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyPressed, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyPressed, false);
  }

  keyPressed = (e) => {

    let current = this.state.current;

    console.log(this.props);
    if(e.key === 'ArrowDown') {
      current += this.props.cols;
    }
    if(e.key === 'ArrowUp') {
      current -= this.props.cols;
      // if(current < 0) current = characters.length - characters.length%6;
    }
    if(e.key === 'ArrowRight') {
      current++;
      // if(current >= characters.length) current = 0;
    }
    if(e.key === 'ArrowLeft') {
      current--;
      // if(current < 0) current = characters.length - 1;
    }
    
    if(current >= 0 && current < this.props.characters.length && current !== this.state.current) { 
      this.setState({ current });
      e.preventDefault();
    }
  }

  render() {

    const { characters, cols } = this.props;
    const { current } = this.state;

    return (
      <Wrapper>
        <Col md="7">
          <CharacterList cols={cols} characters={characters} current={current} />
        </Col>
        <Col md="5">
          <Character {...characters[current]} />
        </Col>
      </Wrapper>
    );
  }
}

CharacterMenu.defaultProps = {
  cols: 5
}

export default React.memo(CharacterMenu);