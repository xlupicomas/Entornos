import React from 'react'
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';

export type Razas = Raza[]


export interface Raza {
  weight: Weight
  id: string
  name: string
  cfa_url?: string
  vetstreet_url: string
  vcahospitals_url?: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  lap?: number
  alt_names: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url: string
  hypoallergenic: number
  reference_image_id: string
}

export interface Weight {
  imperial: string
  metric: string
}

export interface Imagen {
  id: string
  width: number
  height: number
  url: string
}
function Breeds() {
  const [razas, setRazas] = React.useState([] as Razas)
  React.useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api.key": "live_ioUYq4IUoz5dqMqMJkps9z5NdoL92e4SX81bkV2tNMD4EnAmB6W9HZZ5C2QdM1dp",
      },
    }).then((response) => response.json()).then((data: Razas) => {
      setRazas(data);
    });

  }, []);
  
  return (
    <div>
      <Row className='row gx-5'>
        {razas.map((raza, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <div className="card-body2" key={i}>
              <h5 className='card-title'>{raza.name}</h5>
              <p className='card-text'>{raza.origin}</p>
              <Card.Img/>
                <Image className="img-fluid "
                  src={"https://cdn2.thecatapi.com/images/"+raza.reference_image_id+".jpg"}
                  alt={raza.name}
                  fluid
                />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Breeds