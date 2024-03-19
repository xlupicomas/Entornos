import React from "react";
interface estructura {
    imagen: string;
    nombre: string;
    peso: string;
}

let HotelRow: React.FunctionComponent<estructura> = ({
    imagen,
    nombre,
    peso,
}) => {
    return (
        <div>
            <div>
                <img src={imagen} alt={nombre} style={{ width: '100px' }} />
            </div>
            <div>{nombre}</div>
            <div>{peso}</div>
        </div>
    );
};
export default HotelRow