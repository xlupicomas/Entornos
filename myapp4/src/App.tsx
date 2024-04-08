import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './componentes/table';
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { table } from 'console';
import HotelTable from './componentes/HotelTable';
import RestaurantesTable from "./componentes/RestaurantesTable";
import ActividadesTable from "./componentes/ActividadesTable";

function App() {
  return (
    <div>
    
<BrowserRouter>
    <div className="App">

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="PuntosDeInteres">PuntosDeInteres</Nav.Link>
            <Nav.Link as={Link} to="Hoteles">Hoteles</Nav.Link>
            <Nav.Link as={Link} to="Restaurantes">Restaurantes</Nav.Link>
            <Nav.Link as={Link} to="actividades">actividades</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <Routes>
          <Route path="/PuntosDeInteres" element={<Interes/>} />
          <Route path="/Hoteles" element={<Hoteles/>}/>
          <Route path="/Restaurantes" element={<Restaurantes/>}/>
          <Route path="/actividades" element={<Actividades/>}/>
          <Route index element={<Home />}/>
        </Routes>
    </div>
    </BrowserRouter>
</div>
);
    {/* <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/PuntosDeInteres">Punts d'Interés</Nav.Link>
            <Nav.Link href="/actividades">actividades</Nav.Link>
            <Nav.Link href="/Hoteles">Hoteles</Nav.Link>
            <Nav.Link href="/Restaurantes">Restaurantes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </div> */}
  function Home() {
    return (
      <div>
        <div>

        <h2>Benvinguts a Ciutat Esmeralda</h2>
        <p>Benvinguts a Ciutat Esmeralda, un paradís urbà situat al cor d'una vall frondosa, envoltada de muntanyes majestuoses i rius cristal·lins. Amb una rica història que es remunta a segles enrere, Ciutat Esmeralda ha crescut fins a esdevenir un mosaic vibrant de cultures, arts i gastronomia.</p>
        <p>Aquesta ciutat encantadora ofereix una experiència única per a tots els visitants. Ja sigui passejar pels carrers empedrats del casc antic, explorar els mercats plens de colors o gaudir de la tranquil·litat dels parcs verdosos, sempre hi ha alguna cosa emocionant per descobrir a cada cantonada.</p>
        <p>Amb una escena cultural efervescent, els museus, teatres i galeries d'art de Ciutat Esmeralda són una font inesgotable d'inspiració i entreteniment. A més, els amants de la natura trobaran refugi en els paratges naturals que envolten la ciutat, ideal per a l'excursionisme, el ciclisme i l'observació de fauna i flora.</p>
        <p>A Ciutat Esmeralda, la hospitalitat és una tradició que es manté viva. Els habitants locals us conviden a descobrir els secrets i les meravelles d'aquest indret especial i us donen la benvinguda a una experiència inoblidable.</p>
        <p>Us convidem a explorar i a viure tot el que Ciutat Esmeralda té per oferir. Que la vostra estada sigui plena de moments emocionants i records inoblidables. Benvinguts a la nostra estimada Ciutat Esmeralda.</p>
        </div>
      </div>
    );
  }
  
  
  function Interes() {
    return <Table/>;
  }
  
  function Hoteles() {
    return <HotelTable/>;
  }
  function Restaurantes() {
    return <RestaurantesTable/>
  }
  function Actividades(){
    return <ActividadesTable/>
  }
}

export default App;
