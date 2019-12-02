import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterMenu from '../components/CharacterMenu'
import Character from '../components/Character'


const characters = [
  { name: 'Santiago Cafiero', role: 'Jefe de Gabinete', confirmed: true, description: '', age: null },
  { name: 'Julio Vitobello', role: 'Secretaría General de la Presidencia', confirmed: false, description: '', age: null },
  { name: 'Vilma Ibarra', role: 'Secretaría Legal y Técnica', confirmed: true, description: '', age: null },
  { name: 'Matías Kulfas', role: 'Ministerio de Economía', confirmed: true, description: '', age: null },
  { name: 'Martín Guzmán', role: 'Secretaría de finanzas', confirmed: false, description: '', age: null },
  { name: 'José Ignacio De Mendiguren', role: 'Secretaría de Producción', confirmed: false, description: '', age: null },
  { name: 'Miguel Ángel Pesce', role: 'Titular del Banco Central', confirmed: true, description: '', age: null },
  { name: 'Felipe Solá', role: 'Ministerio de Relaciones Exteriores', confirmed: true, description: '', age: null },
  { name: 'Eduardo "Wado" de Pedro', role: 'Ministerio del Interior', confirmed: true, description: '', age: null },
  { name: 'Daniel Arroyo', role: 'Ministerio de Desarrollo Social', confirmed: true, description: '', age: null },
  { name: 'Sergio Lanziani', role: 'Ministerio de Energía', confirmed: false, description: '', age: null },
  { name: 'Alberto Hensel', role: 'Ministerio de Minería', confirmed: false, description: '', age: null },
  { name: 'Marcela Losardo', role: 'Ministerio de Justicia', confirmed: true, description: '', age: null },
  { name: 'Ginés González García', role: 'Ministerio de Salud', confirmed: false, description: '', age: null },
  { name: 'María Eugenia Bielsa', role: 'Ministerio de Hábitat y Vivienda', confirmed: true, description: '', age: null },
  { name: 'Gabriel Katopodis', role: 'Ministerio de Obras Públicas o Infraestructura', confirmed: true, description: '', age: null },
  { name: 'Agustín Rossi', role: 'Ministro de Defensa', confirmed: true, description: '', age: null },
  { name: '???', role: 'Ministerio de Seguridad', confirmed: false, description: '', age: null },
  { name: 'Claudio Moroni', role: 'Ministerio de Trabajo', confirmed: true, description: '', age: null },
  { name: 'Victoria Donda', role: 'Ministerio de Igualdad y DD.HH.', confirmed: false, description: '', age: null },
  { name: 'Carlos Caserio', role: 'Ministerio de Transporte', confirmed: false, description: '', age: null },
  { name: 'Nicolás Trotta', role: 'Ministerio de Educación', confirmed: false, description: '', age: null },
  { name: '??? Tristán Bauer o Alejandro Grimson', role: 'Ministerio de Cultura', confirmed: false, description: '', age: null },
  { name: 'Roberto Salvarezza', role: 'Ministerio de Ciencia y Tecnología', confirmed: false, description: '', age: null },
  { name: '??? F. Meritello o Leandro Santoro', role: 'Secretaría de Medios Públicos', confirmed: false, description: '', age: null },
  { name: 'Matías Lammens', role: 'Secretaría de Deportes', confirmed: false, description: '', age: null },
  { name: 'Marco Lavagna', role: 'Titular del INDEC', confirmed: false, description: '', age: null },
  { name: 'Carlos Zannini', role: 'Procurador del Tesoro', confirmed: false, description: '', age: null }
]
const COLS = 6;

class App extends Component {

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
    e.preventDefault();
    let current = this.state.current;
    if(e.key === 'ArrowDown') {
      current += COLS;
    }
    if(e.key === 'ArrowUp') {
      current -= COLS;
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
    
    
    if(current >= 0 && current < characters.length && current !== this.state.current) this.setState({ current });
  }

  render() {

    const currentCharacter = characters[this.state.current];

    return (
      <Container>
        <Row>
          <Col md="2">
            <Character {...currentCharacter} />
          </Col>
          <Col md="9">
            <CharacterMenu characters={characters} current={this.state.current} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
