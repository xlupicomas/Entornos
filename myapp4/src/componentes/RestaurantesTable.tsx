import React from "react";
import { filas } from "./restaurante"
import { Col, Row } from "react-bootstrap";

function RestauranteTable() {
    return (
        <div className="card">
            <Row>
                {filas.map((filas, indice) => (
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="card-body" key={indice}>
                            <h5 className="card-title">{filas.Nombre}</h5>
                            <p className="card-text">{filas.Descripción}</p>
                            <p className="card-text">{filas.Contacto}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );


}
export default RestauranteTable