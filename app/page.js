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
      precio: 3239,
      imagen: '/marlboro-20-ks-comun.webp',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Marlboro 20 box',
      precio: 3675,
      imagen: '/marlboro-box.webp',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Marlboro 10 comun',
      precio: 2203,
      imagen: '/marlboro-10-comun.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Marlboro 20 fusion uva',
      precio: 3523,
      imagen: '/marlboro-20-fusion-uva.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Marlboro 10 fusion uva',
      precio: 2152,
      imagen: '/marlboro-10-uva.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Marlboro 20 crafted ks',
      precio: 1959,
      imagen: '/marlboro-20-crafted-ks.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Philip Morris 20 ks',
      precio: 2700,
      imagen: '/philip-morris-20-ks.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Philip Morris 10 comun',
      precio: 1817,
      imagen: '/philip-10-comun.jpg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Philip Morris 20 convertible',
      precio: 3086,
      imagen: '/philip-20-convert.webp',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Philip Morris 10 convertible',
      precio: 1848,
      imagen: '/philip-10-convert.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 20 comun ks',
      precio: 2041,
      imagen: '/chesterfield-20-comun-ks.jpeg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 10 comun',
      precio: 1208,
      imagen: '/chesterfield-10-comun.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 20 Box convertible',
      precio: 2487,
      imagen: '/chester-20-convert.jpg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 20 comun convertible',
      precio: 2101,
      imagen: '/CHESTER-20-comun-convert.jpeg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Chesterfield 10 convertible',
      precio: 1472,
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
      precio: 1697,
      imagen: '/lucky-10-convert.PNG',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Lucky 20 Box convertible',
      precio: 2835,
      imagen: '/Lucky-20-box-conv.png',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Lucky 20 comun convertible',
      precio: 2439,
      imagen: '/lucky-convertible-ks.webp',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Milenio Comun 20',
      precio: 1150,
      imagen: '/MilenioRed.jpg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Milenio Menta 20',
      precio: 1150,
      imagen: '/milenio-menta.jpg',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Kiel Comun 20',
      precio: 890,
      imagen: '/kiel.webp',
      cantidad: 0,
      cantidadx10: 0,
    },
    {
      marca: 'Hills Click 20',
      precio: 850,
      imagen: '/Hills.jpg',
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

  const enviarMensajeWhatsApp = () => {
    const mensaje = `¡Hola! Estas son las marcas y cantidades de cigarrillos elegidas:\n\n`;
    const marcasCantidades = cigarrillos
      .filter(
        (cigarrillo) => cigarrillo.cantidad > 0 || cigarrillo.cantidadx10 > 0
      )
      .map((cigarrillo) => {
        let mensajeCigarrillo = '';
        if (cigarrillo.cantidad > 0) {
          mensajeCigarrillo += `${cigarrillo.cantidad}uni - ${cigarrillo.marca}\n`;
        }
        if (cigarrillo.cantidadx10 > 0) {
          mensajeCigarrillo += `${cigarrillo.cantidadx10}uni - ${cigarrillo.marca}\n`;
        }
        return mensajeCigarrillo;
      })
      .join('\n');

    const mensajeWhatsApp = `${marcasCantidades}\n\n$Total: ${calcularTotal().toFixed(
      2
    )}`;
    const numeroTelefono = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    const linkWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
      mensajeWhatsApp
    )}`;

    window.open(linkWhatsApp, '_blank');
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
          <Button
            onClick={enviarMensajeWhatsApp}
            className="ml-5 mt-5 bg-green-600"
          >
            enviar Whatsapp
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
