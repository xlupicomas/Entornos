import React from 'react';
import './App.css';
import Table from './componentes/table';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HotelTable from './componentes/HotelTable';
import Breeds from "./API/Razas";
import Raza from './API/Raza';
import RazaDetalles from './API/RazaDetalles';

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
                  <Nav.Link as={Link} to="Cartas">Cartas</Nav.Link>
                  <Nav.Link as={Link} to="Raza">PuntosDeInteres</Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/Cartas" element={<Breeds />} />
            <Route path="/Raza" element={<Raza />} />
            <Route path="/Raza/id" element={<RazaDetalles id={""} />} />

            <Route index element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
  function Home() {
    return (
      <div>
        <div>
          <h1>GATOOS!!</h1>
          <p>"Explorando el Fascinante Mundo de los Gatos: Una Aventura Virtual Felina"</p>

          <p>Bienvenido a nuestra página web dedicada al fascinante mundo de los gatos. Aquí en nuestro santuario virtual, nos adentramos en el misterioso y encantador reino de estos felinos curiosos que han cautivado a la humanidad durante siglos. Desde su elegante andar hasta su independencia intrigante, los gatos son criaturas que despiertan la admiración y el cariño en igual medida.</p>

          <p>En nuestra página, te invitamos a descubrir todo sobre estos compañeros peludos. Desde aprender sobre las diferentes razas, como el majestuoso Maine Coon o el enigmático Siamés, hasta comprender sus comportamientos únicos y cómo brindarles el mejor cuidado posible.</p>

          <p>Navega por nuestras secciones dedicadas al cuidado y alimentación, donde encontrarás consejos prácticos y útiles para garantizar la salud y la felicidad de tu amigo felino. Además, sumérgete en nuestra galería de imágenes y vídeos adorables que capturan la esencia de estos bellos animales en todo su esplendor.</p>

          <p>Únete a nuestra comunidad de amantes de los gatos y comparte tus experiencias, preguntas y fotos de tus propios compañeros peludos. Juntos, exploraremos el mundo de los gatos y celebraremos la maravilla y el encanto que traen a nuestras vidas. ¡Prepárate para embarcarte en una aventura virtual felina que te dejará maravillado y con el corazón lleno de amor por estos increíbles animales!"</p>
        </div>
      </div>
    );
  }


  function Interes() {
    return <Table />;
  }

  function Hoteles() {
    return <HotelTable />;
  }
}

export default App;
