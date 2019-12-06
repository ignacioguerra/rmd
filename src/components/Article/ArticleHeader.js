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

      <div className="topic">Gabinete</div>
      <h1>{props.title}</h1>
      <ArticleActions comments="2" />
      <p className="copete">El acto de apertura del Encuentro Nacional de Mujeres (ENM) estaba previsto para hoy a las 9:30 en el Estadio Único de La Plata. La suspensión fue dispuesta esta mañana por el cuartel de bomberos de La Plata debido a la tormenta eléctrica y las intensas lluvias.</p>
    </div>
  );
}

export default ArticleHeader;