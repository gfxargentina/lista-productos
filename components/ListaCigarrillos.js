import React from 'react';
import Cigarrillo from './Cigarrillo';

const ListaCigarrillos = ({
  cigarrillos,

  agregarCigarrillo,
  agregarCigarrillox10 = { agregarCigarrillox10 },
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
          cantidadx10={cigarrillo.cantidadx10}
          agregarCigarrillo={() => agregarCigarrillo(index)}
          agregarCigarrillox10={() => agregarCigarrillox10(index)}
          eliminarCigarrillo={() => eliminarCigarrillo(index)}
        />
      ))}
    </div>
  );
};

export default ListaCigarrillos;
