import React from 'react';
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.25em;
`

const CommentBox = (props) => {
  
  return (
    <div>
      <Title>Comentarios</Title>
      <p>Aún no hay comentarios.</p> 
      <textarea name="comment" id="comment" cols="30" rows="3" className="form-control"></textarea>
    </div>
  );
}

export default CommentBox;