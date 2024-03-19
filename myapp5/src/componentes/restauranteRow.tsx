import React from "react";
import img from "./bola-de-fuego.png";
interface estructura {
    nombre: string;
    Descripción: string;
    Contacto: string;
}

let HotelRow: React.FunctionComponent<estructura> = ({
    nombre,
    Descripción,
    Contacto,
}) => {
    return (
        <div>
            <div>{nombre}</div>
            <div>{Descripción}</div>
            <div>{Contacto}</div>
        </div>
    );
};
export default HotelRow