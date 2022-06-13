import './App.css';

import { Container } from '@material-ui/core';
import Quiz from './Components/Quiz';

//logo
import logo from '../src/Expertizo-logo.png'

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} alt="logo"/>
      </div>
      <Container>
        <Quiz />
      </Container>
    </div>
  );
}

export default App;
