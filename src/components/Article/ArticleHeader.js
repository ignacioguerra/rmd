import React from 'react';
import styled from 'styled-components'
import ArticleActions from './ArticleActions';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  padding-top: 20px;
`
const Title = styled.h1`
  margin-bottom: 10px;
`

const ArticleHeader = (props) => {
  
  return (
    <div>

      <div className="topic">{props.topic}</div>
      <h1>{props.title}</h1>
      <ArticleActions comments="2" />
      <p className="copete">{props.children}</p>
    </div>
  );
}

export default ArticleHeader;