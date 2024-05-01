'use client';
import ListaCigarrillos from '@/components/ListaCigarrillos';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [resetTotal, setResetTotal] = useState(0);
  const [cigarrillos, setCigarrillos] = useState([
    {
      marca: 'Marlboro 20 comun ks',
      precio: 2616.6,
      imagen: '/marlboro-20-ks-comun.webp',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Marlboro 20 box',
      precio: 2901.7,
      imagen: '/marlboro-box.webp',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Marlboro 10 comun',
      precio: 1720.6,
      imagen: '/marlboro-10-comun.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Marlboro 20 fusion uva',
      precio: 2168.61,
      imagen: '/marlboro-20-fusion-uva.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Marlboro 10 fusion uva',
      precio: 1578.1,
      imagen: '/marlboro-box.webp',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Marlboro 20 crafted ks',
      precio: 1822.45,
      imagen: '/marlboro-20-crafted-ks.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Philip Morris 20 ks',
      precio: 2260.25,
      imagen: '/philip-morris-20-ks.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Philip Morris 10 comun',
      precio: 1527.19,
      imagen: '/philip-10-comun.jpg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Philip Morris 20 convertible',
      precio: 2616.59,
      imagen: '/philip-20-convert.webp',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Philip Morris 10 convertible',
      precio: 1557.74,
      imagen: '/philip-10-convert.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 20 comun ks',
      precio: 1679.91,
      imagen: '/chesterfield-20-comun-ks.jpeg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 10 comun',
      precio: 1079.22,
      imagen: '/chesterfield-10-comun.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 20 Box convertible',
      precio: 2168.61,
      imagen: '/chester-20-convert.jpg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 20 comun convertible',
      precio: 1802.09,
      imagen: '/CHESTER-20-comun-convert.jpeg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 10 convertible',
      precio: 1303.2,
      imagen: '/CHESTER-20-comun-convert.jpeg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 20 sandia',
      precio: 2168.61,
      imagen: '/chester-20-sandia.webp',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Lucky 10 convertible',
      precio: 1341.26,
      imagen: '/lucky-10-convert.PNG',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Lucky 20 Box convertible',
      precio: 2265.92,
      imagen: '/Lucky-20-box-conv.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Lucky 20 comun convertible',
      precio: 1950.92,
      imagen: '/lucky-convertible-ks.webp',
      cantidad: 0,
      cantidadx10: 0,
    },

    // Agrega más cigarrillos aquí si lo deseas
  ]);

  const agregarCigarrillo = (index) => {
    const nuevoCigarrillos = [...cigarrillos];
    nuevoCigarrillos[index].cantidad += 1;
    setCigarrillos(nuevoCigarrillos);
  };

  const agregarCigarrillox10 = (index) => {
    const nuevoCigarrillos = [...cigarrillos];
    nuevoCigarrillos[index].cantidadx10 += 10; // Incrementa la cantidad multiplicada por 10 en 10
    setCigarrillos(nuevoCigarrillos);
  };

  const eliminarCigarrillo = (index) => {
    const nuevoCigarrillos = [...cigarrillos];
    if (nuevoCigarrillos[index].cantidad > 0) {
      nuevoCigarrillos[index].cantidad -= 1;
      setCigarrillos(nuevoCigarrillos);
    }
    if (nuevoCigarrillos[index].cantidadx10 >= 10) {
      nuevoCigarrillos[index].cantidadx10 -= 10;
      setCigarrillos(nuevoCigarrillos);
    }
  };

  const calcularTotal = () => {
    return cigarrillos.reduce((total, cigarrillo) => {
      // Verificar si cigarrillo.precio existe antes de usarlo
      if (cigarrillo.precio) {
        if (cigarrillo.cantidadx10 > 0) {
          return total + cigarrillo.precio * cigarrillo.cantidadx10;
        } else {
          return total + cigarrillo.precio * cigarrillo.cantidad;
        }
      }
      // Si no existe, retornar el total sin sumar nada
      return total;
    }, 0);
  };

  // Restablece todas las cantidades de cigarrillos a 0 y luego restablece el total a 0
  const handleResetTotal = () => {
    const nuevoCigarrillos = cigarrillos.map((cigarrillo) => ({
      ...cigarrillo,
      cantidad: 0,
      cantidadx10: 0,
    }));
    setCigarrillos(nuevoCigarrillos);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 bg-white z-10 p-4 shadow-xl">
        <h1 className="text-center mb-5 text-xl font-bold">
          Lista de Cigarrillos
        </h1>
        <div className="text-center">
          <h2 className="font-bold text-red-600  text-2xl">
            Total : ${resetTotal ? 0 : calcularTotal().toFixed(2)}
          </h2>
          <Button onClick={handleResetTotal} className="mt-5">
            Limpiar
          </Button>
        </div>
      </div>
      <div className=" mt-40 ">
        <ListaCigarrillos
          cigarrillos={cigarrillos}
          agregarCigarrillo={agregarCigarrillo}
          agregarCigarrillox10={agregarCigarrillox10}
          eliminarCigarrillo={eliminarCigarrillo}
        />
      </div>
    </div>
  );
}
