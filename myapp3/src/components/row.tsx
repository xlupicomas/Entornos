import React from "react";
import img from "./bola-de-fuego.png";
interface estructura {
    producto: string;
    cantidad: number;
    precio: number;
    tienda: string;
    notas: string;
    comprado: boolean;
    imagen: string;
}

let Row: React.FunctionComponent<estructura> = ({
    producto,
    cantidad,
    precio,
    tienda,
    notas,
    comprado,
    imagen,
}) => {
    return (
        <tr>
            <th>{producto}</th>
            <th>{cantidad}</th>
            <th>{precio}</th>
            <th>{tienda}</th>
            <th>{notas}</th>
            <th>{comprado ? "Sí" : "No"}</th>
            <th>
                <img src={imagen} alt={producto} style={{ maxWidth: '100px' }} />
            </th>
        </tr>
    );
};
export default Row