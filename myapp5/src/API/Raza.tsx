import React, { useState, useEffect } from "react";
import RazaDetalles from "./RazaDetalles";
import Form from 'react-bootstrap/Form';
import FormSelect from 'react-bootstrap/FormSelect';
export type Razas = Raza[];

export interface Raza {
  weight: Weight;
  height: Height;
  id: number;
  name: string;
  bred_for?: string;
  breed_group?: string;
  life_span: string;
  temperament?: string;
  origin?: string;
  reference_image_id: string;
  country_code?: string;
  description?: string;
  history?: string;
}
export interface Weight {
  imperial: string;
  metric: string;
}

export interface Height {
  imperial: string;
  metric: string;
}
const Raza = () => {
  const [razas, setRazas] = useState<Razas>([]);
  const [selectRazaId, setSelectRazaId] = useState<string>();

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": "123456",
      },
    })
      .then((response) => response.json())
      .then((data: Razas) => {
        setRazas(data);
      });
  }, []);

  const handleRazaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectRazaId(event.target.value);
  };

  return (
    <div>
      <h1 className="position-relative">Razas</h1>
      <div className="d-flex justify-content-center">
      <Form.Select className="w-50 " value={selectRazaId} onChange={handleRazaChange}>
        <option value="">Seleccione una raza</option>

        {razas.map((raza) => (
          <option value={raza.id}>
            {raza.name}
          </option>
        ))}
      </Form.Select >
      </div>
      {selectRazaId && <RazaDetalles id={selectRazaId} />}
    
    </div>
  );
};

export default Raza;