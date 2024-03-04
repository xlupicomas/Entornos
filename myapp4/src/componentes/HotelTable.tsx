import React from "react";
import { filas } from "./hoteles"

function HotelTable() {
    return (
        <div className="card grid">
            {filas.map((filas, indice) => (
            <div className="card-body" key={indice}>
                <div>
                    <img src={filas.imagen} alt={"foto"} style={{ width: '100px' }} />
                </div>
                <h5 className="card-title">{filas.Nombre}</h5>
                <p className="card-text">{filas.Calle}</p>
                <p className="card-text">{filas.preu}</p>
                <a href="https://www.barcelo.com/es-es/" className="btn btn-primary">Link</a>
            </div>
        ))}
        </div>
        )
        {/* <div className="HotelTable">
                {filas.map((filas, indice) => (
                    <div key={indice} className="tarjeta">
                        <div>
                            <img src={filas.imagen} alt={"foto"} style={{ width: '100px' }} />
                        </div>
                        <div>{filas.Nombre}</div>
                        <div>{filas.Calle}</div>
                    </div>
                ))}
        </div> */}
    ;


}
export default HotelTable