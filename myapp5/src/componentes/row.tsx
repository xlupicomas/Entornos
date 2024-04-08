import React from "react";
import img from "./bola-de-fuego.png";
interface estructura {
    nombre: string;
    calle: string;
    tipo: string;
    notas: string;
    imagen: string;
}

let Row: React.FunctionComponent<estructura> = ({
    nombre,
    calle,
    tipo,
    notas,
    imagen,
}) => {
    return (
        <tr>
            <th>{nombre}</th>
            <th>{calle}</th>
            <th>{tipo}</th>
            <th>{notas}</th>
            <th>
                <img src={imagen} alt={nombre} style={{ maxWidth: '100px' }} />
            </th>
        </tr>
    );
};
export default Row