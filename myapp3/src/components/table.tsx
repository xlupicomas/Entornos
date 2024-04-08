import React from "react";
import { filas } from "./lista"

function Table() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Producte</th>
                    <th>Quantitat</th>
                    <th>Preu</th>
                    <th>Tenda</th>
                    <th>Notes</th>
                    <th>Comprat</th>
                    <th>Imatge</th>
                </tr>
            </thead>
            <tbody>
                {filas.map((filas, indice) => (
                    <tr key={indice}>
                        <td>{filas.producto}</td>
                        <td>{filas.cantidad}</td>
                        <td>{filas.precio}</td>
                        <td>{filas.tienda}</td>
                        <td>{filas.notas}</td>
                        <td>{filas.comprado ? "Sí" : "No"}</td>
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