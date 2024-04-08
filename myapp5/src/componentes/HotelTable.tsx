import React from "react";
import { filas } from "./hoteles"
import { Col, Row } from "react-bootstrap";

function HotelTable() {
    return (
        <div className="card">
            <Row>
                {filas.map((filas, indice) => (
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="card-body" key={indice}>
                            <div>
                                <img src={filas.Imagen} alt={"foto"} style={{ width: '100px' }} />
                            </div>
                            <h5 className="card-title">{filas.Nombre}</h5>
                            <p className="card-text">{filas.peso}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );


}
export default HotelTable