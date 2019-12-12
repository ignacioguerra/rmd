import React, { Component } from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header/Header'
import ArticleHeader from '../components/Article/ArticleHeader'
import ArticleActions from '../components/Article/ArticleActions'
import ArticleBlock from '../components/Article/ArticleBlock'
import LinkList from '../components/Article/LinkList'
import CommentBox from '../components/Article/CommentBox'
import CharacterMenu from '../components/CharacterMenu/CharacterMenu';

const characters = [
  { 
    name: 'Santiago Cafiero',
    role: 'Jefe de Gabinete',
    abbr: { name: 'Cafiero', role: 'Jefe de Gabinete' },
    img: { small: 'cafiero_250x250.jpg', big: 'cafiero_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Martín Guzmán',
    role: 'Ministerio de Economía',
    abbr: { name: 'Guzmán', role: 'Economía' },
    img: { small: 'guzman_250x250.jpg', big: 'guzman_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Matías Kulfas',
    role: 'Ministerio de Desarrollo Productivo',
    abbr: { name: 'Kulfas', role: 'Producción' },
    img: { small: 'kulfas_250x250.jpg', big: 'kulfas_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Felipe Solá',
    role: 'Ministerio de Relaciones Exteriores',
    abbr: { name: 'Solá', role: 'Cancillería' },
    img: { small: 'sola_250x250.jpg', big: 'sola_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Eduardo "Wado" de Pedro',
    role: 'Ministerio del Interior',
    abbr: { name: 'de Pedro', role: 'Interior' },
    img: { small: 'depedro_250x250.jpg', big: 'depedro_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Daniel Arroyo',
    role: 'Ministerio de Desarrollo Social',
    abbr: { name: 'Arroyo', role: 'Desarrollo Social' },
    img: { small: 'arroyo_250x250.jpg', big: 'arroyo_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Marcela Losardo',
    role: 'Ministerio de Justicia',
    abbr: { name: 'Losardo', role: 'Justicia' },
    img: { small: 'losardo_250x250.jpg', big: 'losardo_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Ginés González García',
    role: 'Ministerio de Salud',
    abbr: { name: 'González García', role: 'Salud' },
    img: { small: 'gonzalezgarcia_250x250.jpg', big: 'gonzalezgarcia_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'María Eugenia Bielsa',
    role: 'Ministerio de Desarrollo Territorial',
    abbr: { name: 'Bielsa', role: 'Desarrollo Territorial' },
    img: { small: 'bielsa_250x250.jpg', big: 'bielsa_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Gabriel Katopodis',
    role: 'Ministerio de Obras Públicas o Infraestructura',
    abbr: { name: 'Katopodis', role: 'Obras Públicas' },
    img: { small: 'katopodis_250x250.jpg', big: 'katopodis_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Agustín Rossi',
    role: 'Ministro de Defensa',
    abbr: { name: 'Rossi', role: 'Defensa' },
    img: { small: 'rossi_250x250.jpg', big: 'rossi_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Sabina Frederic',
    role: 'Ministerio de Seguridad',
    abbr: { name: 'Frederic', role: 'Seguridad' },
    img: { small: 'frederic_250x250.jpg', big: 'frederic_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Claudio Moroni',
    role: 'Ministerio de Trabajo',
    abbr: { name: 'Moroni', role: 'Trabajo' },
    img: { small: 'moroni_250x250.jpg', big: 'moroni_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Elisabeth Gómez Alcorta',
    role: 'Ministerio de la Mujer',
    abbr: { name: 'Gómez Alcorta', role: 'Mujer' },
    img: { small: 'gomezalcorta_250x250.jpg', big: 'gomezalcorta_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Mario Meoni',
    role: 'Ministerio de Transporte',
    abbr: { name: 'Meoni', role: 'Transporte' },
    img: { small: 'meoni_250x250.jpg', big: 'meoni_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Nicolás Trotta',
    role: 'Ministerio de Educación',
    abbr: { name: 'Trotta', role: 'Educación' },
    img: { small: 'trotta_250x250.jpg', big: 'trotta_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Tristán Bauer',
    role: 'Ministerio de Cultura',
    abbr: { name: 'Bauer', role: 'Cultura' },
    img: { small: 'bauer_250x250.jpg', big: 'bauer_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Roberto Salvarezza',
    role: 'Ministerio de Ciencia y Tecnología',
    abbr: { name: 'Salvarezza', role: 'Ciencia y Tecnología' },
    img: { small: 'salvarezza_250x250.jpg', big: 'salvarezza_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Matías Lammens',
    role: 'Ministerio de Turismo y Deportes',
    abbr: { name: 'Lammens', role: 'Turismo y Deportes' },
    img: { small: 'lammens_250x250.jpg', big: 'lammens_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Luis Basterra',
    role: 'Ministerio de Agricultura',
    abbr: { name: 'Basterra', role: 'Agricultura' },
    img: { small: 'basterra_250x250.jpg', big: 'basterra_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Juan Cabandié',
    role: 'Ministerio de Ambiente',
    abbr: { name: 'Cabandié', role: 'Ambiente' },
    img: { small: 'cabandie_250x250.jpg', big: 'cabandie_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Julio Vitobello',
    role: 'Secretaría General de la Presidencia',
    abbr: { name: 'Vitobello', role: 'S.G. de la Presidencia' },
    img: { small: 'vitobello_250x250.jpg', big: 'vitobello_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Vilma Ibarra',
    role: 'Secretaría Legal y Técnica',
    abbr: { name: 'Ibarra', role: 'Legal y Técnica' },
    img: { small: 'ibarra_250x250.jpg', big: 'ibarra_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Gustavo Béliz',
    role: 'Secretaría de Asuntos Estratégicos',
    abbr: { name: 'Béliz', role: 'Asuntos Estratégicos' },
    img: { small: 'beliz_250x250.jpg', big: 'beliz_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Sergio Lanziani',
    role: 'Secretaría de Energía',
    abbr: { name: 'Lanziani', role: 'Energía' },
    img: { small: 'lanziani_250x250.jpg', big: 'lanziani_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Alberto Hensel',
    role: 'Secretaría de Minería',
    abbr: { name: 'Hensel', role: 'Minería' },
    img: { small: 'hensel_250x250.jpg', big: 'hensel_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Francisco Meritello',
    role: 'Secretaría de Medios Públicos',
    abbr: { name: 'Meritello', role: 'Medios Públicos' },
    img: { small: 'meritello_250x250.jpg', big: 'meritello_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Inés Arrondo',
    role: 'Secretaría de Deportes',
    abbr: { name: 'Arrondo', role: 'Deportes' },
    img: { small: 'arrondo_250x250.jpg', big: 'arrondo_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Carlos Zannini',
    role: 'Procurador del Tesoro',
    abbr: { name: 'Zannini', role: 'Procurador del Tesoro' },
    img: { small: 'zannini_250x250.jpg', big: 'zannini_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Miguel Ángel Pesce',
    role: 'Titular del Banco Central',
    abbr: { name: 'Pesce', role: 'Banco Central' },
    img: { small: 'pesce_250x250.jpg', big: 'pesce_400x500.jpg' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Alejandro Vanoli',
    role: 'Titular de ANSES',
    abbr: { name: 'Vanoli', role: 'ANSES' },
    img: { small: 'vanoli_250x250.jpg', big: 'vanoli_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Marco Lavagna',
    role: 'Titular del INDEC',
    abbr: { name: 'Lavagna', role: 'INDEC' },
    img: { small: 'lavagna_250x250.jpg', big: 'lavagna_400x500.jpg' },
    confirmed: false,
    description: '',
    age: null 
  },
]

const MainCol = styled(Col)`
  border-right: 1px solid #ddd;
`

const ArticleAsideWrapper = styled(Col)`
  border-left: 1px solid #ddd;
`

const ArticleAside = styled.aside`
  margin: 0 !important;
`

const ArticleAsideSection = styled.section`
  border-bottom: 1px solid #ddd;
`

class App extends Component {

  render() {

    return (
      <Container>
        <Row>
          <MainCol md="2">
            <Header title="LPDiario" />
          </MainCol>
          <MainCol md="10">
            <article className="full">
              <Row>
                <Col md="12">
                  <ArticleHeader title="Alberto Fernandez anunció su gabinete" topic="Gabinete">
                    <p>Con la revelación de que Martín Guzmán será el ministro de Economía, Alberto Fernández terminó con todas las incógnitas respecto al elenco de su gabinete.</p>
                  </ArticleHeader>
                </Col>
              </Row>
              <CharacterMenu characters={characters} cols={4} />
              <Row>
                <Col md="9">
                  <p>Así se conforma el gabinete: Santiago Cafiero (jefe de Gabiente), Martín Guzmán (Economía), Matías Kulfas (Producción), Miguel Ángel Pesce (Banco Central), Ginés González García (Salud), Agustín Rossi (Defensa), Daniel Arroyo (Desarrollo Social), Felipe Solá (Cancillería), María Eugenia Bielsa (Desarrollo Territorial), Eduardo "Wado" de Pedro (Interior), Marcela Losardo (Justicia), Nicolás Trotta (Educación), Tristán Bauer (Cultura), Roberto Salvarezza (Ciencia y Tecnología), G abriel Katopodis (Obras Públicas), Claudio Moroni (Trabajo), Matías Lammens (Turismo y Deportes), Elizabeth Gómez Alcorta (Mujer), Mario Meoni (Transporte), Sabina Frederic (Seguridad), Juan Cabandié (Ambiente) y Luis Basterra (Agricultura), Gustavo Beliz (Asuntos Estratégicos), Vilma Ibarra (Legal y Técnica) y Julio Vitobello (secretaría general de la Presidencia).</p>
                  <ArticleActions likes share />
                  <aside>
                    <LinkList title="Seguí leyendo" items={[
                      'Plata se prepara para el 34º Encuentro Nacional de Mujeres',
                      'Lanzan una app para el 34º Encuentro Nacional de Mujeres'
                    ]} news />
                    <LinkList title="Seguí leyendo" items={[
                      'Encuentro Nacional de Mujeres',
                      '34ENM',
                      'La Plata',
                      'Tormenta',
                      '34ENM',
                      'Inundaciones en La Plata'
                    ]} tags />
                    <CommentBox />
                  </aside>
                </Col>
                <ArticleAsideWrapper md="3">
                  <ArticleAside>
                    <ArticleAsideSection>
                      <LinkList title="Temas del día" items={[
                        'Encuentro Nacional de Mujeres',
                        'Debate presidencial',
                        'Protestas en Ecuador',
                        'Donda enfrenta a policías'
                      ]} />
                      <LinkList title="Temas seguidos" items={[
                        'Elecciones 2019',
                        'Mundial de atletismo Dubai 2019'
                      ]} />
                    </ArticleAsideSection>
                    <ArticleAsideSection>
                      <ArticleBlock topic="Encuentro Nacional de Mujeres" title="La Plata se prepara para el 34º Encuentro Nacional de Mujeres">
                        Con la participación de más de 200.000 personas, se espera que sea el Encuentro más masivo de la historia. Habrá más de 90 actividades culturales y transporte gratuito desde el Estadio al centro de la ciudad.
                      </ArticleBlock>
                    </ArticleAsideSection>
                    <ArticleAsideSection>
                      <LinkList title="Te puede interesar" items={[
                        'La Plata se prepara para recibir el 34º Encuentro Nacional de Mujeres',
                        'Décimo día de protestas en Ecuador',
                        '¿Actuó bien Victoria Donda'
                      ]} news  />
                    </ArticleAsideSection>
                    <section>
                      <LinkList title="Continuar leyendo" items={[
                        'Lanzan una app para el 34º Encuentro Nacional de Mujeres',
                        'Hoy es el "Día para salir del clóset'
                      ]} news  />
                    </section>
                  </ArticleAside>
                </ArticleAsideWrapper>
              </Row>
            </article>
          </MainCol>
        </Row>
      </Container>
    );
  }
}

export default App;
