import React from 'react';
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.25em;
`

const LinkList = (props) => {
  
  const links = props.items.map((item) => {
    return <li><a href="#">{item}</a></li> 
  });

  let classes = '';
  if(props.tags) classes += ' tag-list';
  if(props.news) classes += ' news-list';

  return (
    <div>
      <Title>{props.title}</Title>
      <ul className={classes}>
        {links}
      </ul>
    </div>
  );
}

export default LinkList;