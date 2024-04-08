import React from "react";
import { filas } from "./PuntosDeInteres"

function Table() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Calle</th>
                    <th>Tipo</th>
                    <th>Notes</th>
                    <th>Imatge</th>
                </tr>
            </thead>
            <tbody>
                {filas.map((filas, indice) => (
                    <tr key={indice}>
                        <td>{filas.Nombre}</td>
                        <td>{filas.Calle}</td>
                        <td>{filas.Tipo}</td>
                        <td>{filas.Notas}</td>
                        <td>
                            <img src={filas.imagen} alt={"foto"} style={{ maxWidth: '100px' }} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );


}
export default Table