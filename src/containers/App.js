import React, { Component } from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShareAlt, faComment } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header/Header'
import CharacterMenu from '../components/CharacterMenu/CharacterMenu';

const characters = [
  { 
    name: 'Santiago Cafiero',
    role: 'Jefe de Gabinete',
    abbr: { name: 'S. Cafiero', role: 'Jefe de Gabinete' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Julio Vitobello',
    role: 'Secretaría General de la Presidencia',
    abbr: { name: 'J. Vitobello', role: 'S.G. de la Presidencia' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Vilma Ibarra',
    role: 'Secretaría Legal y Técnica',
    abbr: { name: 'V. Ibarra', role: 'Legal y Técnica' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Matías Kulfas',
    role: 'Ministerio de Economía',
    abbr: { name: 'M. Kulfas', role: 'Economía' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Martín Guzmán',
    role: 'Secretaría de finanzas',
    abbr: { name: 'M. Guzmán', role: 'Finanzas' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'José Ignacio De Mendiguren',
    role: 'Secretaría de Producción',
    abbr: { name: 'De Mendiguren', role: 'Producción' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Miguel Ángel Pesce',
    role: 'Titular del Banco Central',
    abbr: { name: 'M. Á. Pesce', role: 'Banco Central' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Felipe Solá',
    role: 'Ministerio de Relaciones Exteriores',
    abbr: { name: 'Felipe Solá', role: 'Relac. Exteriores' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Eduardo "Wado" de Pedro',
    role: 'Ministerio del Interior',
    abbr: { name: 'E. de Pedro', role: 'Interior' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Daniel Arroyo',
    role: 'Ministerio de Desarrollo Social',
    abbr: { name: 'D. Arroyo', role: 'Desarrollo Social' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Sergio Lanziani',
    role: 'Ministerio de Energía',
    abbr: { name: 'S. Lanziani', role: 'Energía' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Alberto Hensel',
    role: 'Ministerio de Minería',
    abbr: { name: 'A. Hensel', role: 'Minería' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Marcela Losardo',
    role: 'Ministerio de Justicia',
    abbr: { name: 'M. Losardo', role: 'Justicia' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Ginés González García',
    role: 'Ministerio de Salud',
    abbr: { name: 'G. González García', role: 'Salud' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'María Eugenia Bielsa',
    role: 'Ministerio de Hábitat y Vivienda',
    abbr: { name: 'M. E. Bielsa', role: 'Hábitat y Vivienda' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Gabriel Katopodis',
    role: 'Ministerio de Obras Públicas e Infraestructura',
    abbr: { name: 'G. Katopodis', role: 'Obras Públicas e Infraestructura' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Agustín Rossi',
    role: 'Ministro de Defensa',
    abbr: { name: 'A. Rossi', role: 'Defensa' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: '???',
    role: 'Ministerio de Seguridad',
    abbr: { name: '???', role: 'Seguridad' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Claudio Moroni',
    role: 'Ministerio de Trabajo',
    abbr: { name: 'C. Moroni', role: 'Trabajo' },
    confirmed: true,
    description: '',
    age: null 
  },
  { 
    name: 'Victoria Donda',
    role: 'Ministerio de Igualdad y Derechos Humanos',
    abbr: { name: 'V. Donda', role: 'Igualdad y DD.HH.' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Carlos Caserio',
    role: 'Ministerio de Transporte',
    abbr: { name: 'C. Caserio', role: 'Transporte' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Nicolás Trotta',
    role: 'Ministerio de Educación',
    abbr: { name: 'N. Trotta', role: 'Educación' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: '??? Tristán Bauer o Alejandro Grimson',
    role: 'Ministerio de Cultura',
    abbr: { name: 'T. Bauer', role: 'Cultura' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Roberto Salvarezza',
    role: 'Ministerio de Ciencia y Tecnología',
    abbr: { name: 'R. Salvarezza', role: 'Ciencia y Tecnología' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: '??? F. Meritello o Leandro Santoro',
    role: 'Secretaría de Medios Públicos',
    abbr: { name: 'F. Meritello', role: 'Medios Públicos' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Matías Lammens',
    role: 'Secretaría de Deportes',
    abbr: { name: 'M. Lammens', role: 'Deportes' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Marco Lavagna',
    role: 'Titular del INDEC',
    abbr: { name: 'M. Lavagna', role: 'INDEC' },
    confirmed: false,
    description: '',
    age: null 
  },
  { 
    name: 'Carlos Zannini',
    role: 'Procurador del Tesoro',
    abbr: { name: 'C. Zannini', role: 'Procurador del Tesoro' },
    confirmed: false,
    description: '',
    age: null 
  }
]

const SidebarWrapper = styled(Col)`
  border-right: 1px solid #ddd;
`

class App extends Component {

  render() {

    return (
      <Container>
        <Row>
          <SidebarWrapper md="2">
            <Header title="RMDDiario" />
          </SidebarWrapper>
          <Col md="10">
            <article className="full">
              <Row>
                <Col md="9">
                  <div className="topic">Gabinete</div>
                  <h1>El Gabinete de Alberto Fernández</h1>
                  <div className="options">
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faBookmark} /> Leer más tarde</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faShareAlt} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faComment} /> 3</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faHeart} /></a></li>
                    </ul>
                </div>
                <p className="copete">El acto de apertura del Encuentro Nacional de Mujeres (ENM) estaba previsto para hoy a las 9:30 en el Estadio Único de La Plata. La suspensión fue dispuesta esta mañana por el cuartel de bomberos de La Plata debido a la tormenta eléctrica y las intensas lluvias.</p>
                </Col>
              </Row>
              <CharacterMenu characters={characters} cols={6} />
              <Row>
                <Col md="9">
              <p>Horas más tarde, en conferencia de prensa, la Comisión Organizadora solicitó al gobierno que habilite todos los lugares posibles para que las “encuentreras” tengan un lugar para dormir y alojarse, ya que el clima impidió que muchas mujeres pudieran acampar en plazas y parques. Las inundaciones afectaron también a muchas escuelas que iban a ser usadas como refugio para las participantes.</p>
                                        <p>A pesar de los inconvenientes, afirmaron que “para nosotras los encuentros empiezan cuando llegamos a la ciudad sede. Más allá de haber tenido que suspender el acto de apertura, que fue una decisión para cuidar y resguardar la integridad física de todas las encuentreras, los talleres, que son el corazón de los encuentros, estarán abiertos tal como estaban acordados.”</p>
                                        <audio src="http://provinciaradio.com.ar/wp-content/uploads/2019/10/Conferencia-de-prensa-co.mp3" controls=""></audio>
                                        <p>Las actividades del día de hoy se realizarán de manera simultánea en las diferentes instalaciones de la Universidad Nacional de La Plata, entre las 15 y las 18 hs. La agenda completa para el fin de semana se puede consultar en <a href="#">la app lanzada especialmente para este Encuentro</a>.</p>
                                        <p>Las actividades del día de hoy se realizarán de manera simultánea en las diferentes instalaciones de la Universidad Nacional de La Plata, entre las 15 y las 18 hs. La agenda completa para el fin de semana se puede consultar en <a href="#">la app lanzada especialmente para este Encuentro</a>.</p>

                                        <p>Las actividades del día de hoy se realizarán de manera simultánea en las diferentes instalaciones de la Universidad Nacional de La Plata, entre las 15 y las 18 hs. La agenda completa para el fin de semana se puede consultar en <a href="#">la app lanzada especialmente para este Encuentro</a>.</p>
                                        <p>Las actividades del día de hoy se realizarán de manera simultánea en las diferentes instalaciones de la Universidad Nacional de La Plata, entre las 15 y las 18 hs. La agenda completa para el fin de semana se puede consultar en <a href="#">la app lanzada especialmente para este Encuentro</a>.</p>

                                        <div class="options">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-share-alt" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                        <aside>
                                            <h2>Seguí leyendo</h2>
                                            <ul class="news-list">
                                                <li><a href="#">Plata se prepara para el 34º Encuentro Nacional de Mujeres</a></li>
                                                <li><a href="#">Lanzan una app para el 34º Encuentro Nacional de Mujeres</a></li>
                                            </ul>
                                            <h2>Etiquetas</h2>     
                                            <ul class="tag-list">
                                                <li><a href="#">Encuentro Nacional de Mujeres</a></li>
                                                <li><a href="#">34ENM</a></li>
                                                <li><a href="#">La Plata</a></li>
                                                <li><a href="#">Tormenta</a></li>
                                                <li><a href="#">Inundaciones en La Plata</a></li>
                                            </ul>
                                            <h2>Comentarios</h2>
                                            <p>Aún no hay comentarios.</p> 
                                            <textarea name="comment" id="comment" cols="30" rows="3" class="form-control"></textarea>
                                        </aside>
                                        </Col>
              </Row>
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
