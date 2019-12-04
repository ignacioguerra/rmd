import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 6px;
  // height: 100px;
  width: ${props => props.size}%;
  margin: 0.5%;
  display: inline-block;
  overflow: hidden;
  background: #fafafa;
  line-height: 1.25;
  position: relative;
  // border-radius: 10px;
  // box-shadow: 0 2px 3px -1px rgba(0,0,0,.15);
  border: ${props => props.selected ? '1px solid #337ab7' : '1px solid #ddd'};
  color: ${props => props.selected ? '#337ab7' : 'inherit'};
  // background-color: ${props => props.selected ? '#fafafa' : 'auto'};
`
const Pic = styled.div`
  position: relative;

  &::after {
    content: "";
    box-sizing: border-box;
    display: block;
    padding-top: 100%;
    // border: ${props => props.selected ? '3px solid #337ab7' : '3px solid #fff'};
    // border-radius: 50%;
    background-image: url(https://www.baenegocios.com/__export/1560127967538/sites/cronica/img/2019/06/09/pag4.jpg);
    background-size: 120%;
    background-position: center center;
    // background-blend-mode: multiply;
    transition: all 200ms ease-in-out;  
    filter: ${props => props.selected ? 'none' : 'grayscale(90%) contrast(1.05) brightness(110%) opacity(0.5)'};
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
  color: #999;
`
const Info = styled.div`
  // position: absolute;
  // bottom: 5px;
  // left: 0;
  // right: 0;
  padding: 0;
  margin: 5px 0;
  text-align: left;
`

const CharacterOption = (props) => {
  
  return (
    <Wrapper size={props.size} selected={props.selected} title={ props.name + ', ' + props.role }>
      <Pic selected={props.selected} />
      <Info>
        <Name>{props.abbr.name}</Name>
        <Role>{ props.abbr.role }</Role>
      </Info>
    </Wrapper>
  );
}

export default CharacterOption;