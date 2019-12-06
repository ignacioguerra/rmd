import React, { useEffect } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 3px;
  // height: 100px;
  width: ${props => props.size}%;
  margin: 0.5%;
  display: inline-block;
  overflow: hidden;
  // background: #fafafa;
  line-height: 1.25;
  position: relative;
  // border-radius: 10px;
  // box-shadow: 0 2px 3px -1px rgba(0,0,0,.15);
  border: ${props => props.selected ? '2px solid #337ab7' : '2px solid transparent'};
  color: ${props => props.selected ? '#337ab7' : 'inherit'};
  background-color: ${props => props.selected ? '#fafafa' : 'auto'};
  cursor: pointer;
  &:hover {
    border: ${props => props.selected ? '2px solid #337ab7' : '2px solid #ddd'};
  }
`
const Pic = styled.div`
  position: relative;

  &::after {
    content: "";
    box-sizing: border-box;
    display: block;
    padding-top: 75%;
    // border: ${props => props.selected ? '3px solid #337ab7' : '3px solid #fff'};
    // border-radius: 50%;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center center;
    // background-blend-mode: multiply;
    transition: all 200ms ease-in-out;  
    // filter: ${props => props.selected ? 'none' : 'grayscale(90%) contrast(1.05) brightness(110%) opacity(0.5)'};
    // background-color: ${props => props.selected ? 'white' : 'cyan'};
    // box-shadow: 0 3px 3px -1px rgba(0,0,0,.25);
  }
`
const Name = styled.p`
  font-family: 'Bitter', serif;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 0.875em;
`
const Role = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 0.875em;
  opacity: 0.5;
`
const Info = styled.div`
  // position: absolute;
  // bottom: 5px;
  // left: 0;
  // right: 0;
  padding: 0;
  margin: 5px 0 0;
  text-align: left;
`


const CharacterOption = (props) => {
  
  let box = React.createRef();

  useEffect(() => {
    if (window.scrollBy && props.selected) {
      let currentScrollTop = window.scrollY; // window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let elementTop = box.current.getBoundingClientRect().top + currentScrollTop + (document.documentElement.clientTop || document.body.clientTop || 0);
      let elementHeight = box.current.scrollHeight;
      let newTop = currentScrollTop;

      if (elementTop + elementHeight > currentScrollTop + window.innerHeight) {
        newTop = (elementTop + elementHeight - window.innerHeight + 30) - currentScrollTop;
        window.scrollBy({ top: newTop, left: 0, behavior: 'smooth' })
      } else if(elementTop < currentScrollTop) {
        newTop = (elementTop - 30) - currentScrollTop;
        window.scrollBy({ top: newTop, left: 0, behavior: 'smooth' })
      }
    }
  }, [props.selected]);
  
  return (
    <Wrapper onClick={() => { props.onselect(props.index) }} ref={box} size={props.size} selected={props.selected} title={ props.name + ', ' + props.role }>
      <Pic selected={props.selected} src={require('../../assets/img/' + props.img.small)} />
      <Info>
        <Name>{props.abbr.name}</Name>
        <Role>{ props.abbr.role }</Role>
      </Info>
    </Wrapper>
  );
}

export default React.memo(CharacterOption);