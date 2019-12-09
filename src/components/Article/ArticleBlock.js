import React from 'react';
import styled from 'styled-components'
import ArticleActions from './ArticleActions';

const Wrapper = styled.article`
  margin: 2em 0;
`

const ArticleBlock = (props) => {
  
  return (
    <Wrapper>
      {/* <div className="pic" style="background-image: url(img/mujeres.jpg);"> */}
      <div className="pic">
        <div className="topic">
          {props.topic}
        </div>
      </div>
      <h2><a href="#">{props.title}</a></h2>
      {props.children && <p>{props.children}</p>}
      <ArticleActions comments="0" reduced />
    </Wrapper>
  );
}

export default ArticleBlock;