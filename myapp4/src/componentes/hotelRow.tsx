import React from "react";
import img from "./bola-de-fuego.png";
interface estructura {
    imagen: string;
    nombre: string;
    calle: string;
    preu: string;
}

let HotelRow: React.FunctionComponent<estructura> = ({
    imagen,
    nombre,
    calle,
    preu,
}) => {
    return (
        <div>
            <div>
                <img src={imagen} alt={nombre} style={{ width: '100px' }} />
            </div>
            <div>{nombre}</div>
            <div>{calle}</div>
            <div>{preu}</div>
        </div>
    );
};
export default HotelRow