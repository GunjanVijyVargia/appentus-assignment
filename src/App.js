import './App.css';
import Contact from './Componentes/Contact';
import Portfolio from './Componentes/Portfolio';
import Testimonials from './Componentes/Testimonials';
import Header from './Componentes/Header';
import { Container } from 'react-bootstrap';
import Service from './Componentes/Services';

function App() {
  return (
     <Container fluid className='m-0 p-0'>
        <Header />
        <Service/>   
        <Testimonials/>
        <Portfolio/>
        <Contact />
     </Container>
   
  );
}

export default App;
