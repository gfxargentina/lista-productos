'use client';
import ListaCigarrillos from '@/components/ListaCigarrillos';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [cigarrillos, setCigarrillos] = useState([
    {
      marca: 'Marlboro 20 comun ks',
      precio: 26166,
      imagen: '/marlboro-20-ks-comun.webp',
      cantidad: 0,
    },
    {
      marca: 'Marlboro 20 box',
      precio: 29017,
      imagen: '/marlboro-box.webp',
      cantidad: 0,
    },
    {
      marca: 'Marlboro 10 comun',
      precio: 17206,
      imagen: '/marlboro-10-comun.png',
      cantidad: 0,
    },
    {
      marca: 'Marlboro 20 fusion uva',
      precio: 21686.1,
      imagen: '/marlboro-20-fusion-uva.png',
      cantidad: 0,
    },
    {
      marca: 'Marlboro 10 fusion uva',
      precio: 15781,
      imagen: '/marlboro-box.webp',
      cantidad: 0,
    },
    {
      marca: 'Marlboro 20 crafted ks',
      precio: 18224.5,
      imagen: '/marlboro-20-crafted-ks.png',
      cantidad: 0,
    },
    {
      marca: 'Philip Morris 20 ks',
      precio: 22602.5,
      imagen: '/philip-morris-20-ks.png',
      cantidad: 0,
    },
    {
      marca: 'Philip Morris 10 comun',
      precio: 15271.9,
      imagen: '/philip-10-comun.jpg',
      cantidad: 0,
    },
    {
      marca: 'Philip Morris 20 convertible',
      precio: 26165.9,
      imagen: '/philip-20-convert.webp',
      cantidad: 0,
    },
    {
      marca: 'Philip Morris 10 convertible',
      precio: 15577.4,
      imagen: '/philip-10-convert.png',
      cantidad: 0,
    },
    {
      marca: 'Chesterfield 20 comun ks',
      precio: 16799.13,
      imagen: '/chesterfield-20-comun-ks.jpeg',
      cantidad: 0,
    },
    {
      marca: 'Chesterfield 10 comun',
      precio: 10792.2,
      imagen: '/chesterfield-10-comun.png',
      cantidad: 0,
    },
    {
      marca: 'Chesterfield 20 Box convertible',
      precio: 21686.1,
      imagen: '/chester-20-convert.jpg',
      cantidad: 0,
    },
    {
      marca: 'Chesterfield 20 comun convertible',
      precio: 18020.9,
      imagen: '/CHESTER-20-comun-convert.jpeg',
      cantidad: 0,
    },
    {
      marca: 'Chesterfield 10 convertible',
      precio: 13032.0,
      imagen: '/CHESTER-20-comun-convert.jpeg',
      cantidad: 0,
    },
    {
      marca: 'Chesterfield 20 sandia',
      precio: 21686.1,
      imagen: '/chester-20-sandia.webp',
      cantidad: 0,
    },
    {
      marca: 'Lucky 10 convertible',
      precio: 13412.64,
      imagen: '/lucky-10-convert.PNG',
      cantidad: 0,
    },
    {
      marca: 'Lucky 20 Box convertible',
      precio: 22659.23,
      imagen: '/Lucky-20-box-conv.png',
      cantidad: 0,
    },
    {
      marca: 'Lucky 20 comun convertible',
      precio: 19509.29,
      imagen: '/lucky-convertible-ks.webp',
      cantidad: 0,
    },

    // Agrega más cigarrillos aquí si lo deseas
  ]);

  const agregarCigarrillo = (index) => {
    const nuevoCigarrillos = [...cigarrillos];
    nuevoCigarrillos[index].cantidad += 1;
    setCigarrillos(nuevoCigarrillos);
  };

  const eliminarCigarrillo = (index) => {
    const nuevoCigarrillos = [...cigarrillos];
    if (nuevoCigarrillos[index].cantidad > 0) {
      nuevoCigarrillos[index].cantidad -= 1;
      setCigarrillos(nuevoCigarrillos);
    }
  };

  const calcularTotal = () => {
    return cigarrillos.reduce((total, cigarrillo) => {
      return total + cigarrillo.precio * cigarrillo.cantidad;
    }, 0);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 bg-white z-10 p-4 shadow-xl">
        <h1 className="text-center mb-5 text-xl font-bold">
          Lista de Cigarrillos
        </h1>
        <h2 className="font-bold text-red-600 text-center text-2xl">
          Total : ${calcularTotal().toFixed(2)}
        </h2>
      </div>
      <div className=" mt-24 ">
        <ListaCigarrillos
          cigarrillos={cigarrillos}
          agregarCigarrillo={agregarCigarrillo}
          eliminarCigarrillo={eliminarCigarrillo}
        />
      </div>
    </div>
  );
}
