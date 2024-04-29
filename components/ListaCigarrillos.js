import React from 'react';
import Cigarrillo from './Cigarrillo';

const ListaCigarrillos = ({
  cigarrillos,

  agregarCigarrillo,
  eliminarCigarrillo,
}) => {
  return (
    <div className="grid md:grid-cols-4">
      {cigarrillos.map((cigarrillo, index) => (
        <Cigarrillo
          key={index}
          marca={cigarrillo.marca}
          precio={cigarrillo.precio}
          imagen={cigarrillo.imagen}
          cantidad={cigarrillo.cantidad}
          agregarCigarrillo={() => agregarCigarrillo(index)}
          eliminarCigarrillo={() => eliminarCigarrillo(index)}
        />
      ))}
    </div>
  );
};

export default ListaCigarrillos;
