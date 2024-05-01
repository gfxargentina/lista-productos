# Gestor de Pedidos de Cigarrillos

Este proyecto es una aplicación web para gestionar pedidos de cigarrillos. Permite al usuario seleccionar diferentes marcas y cantidades de cigarrillos, calcular el precio total y enviar la lista de pedidos a través de WhatsApp.

## Funcionalidades

- Agregar y eliminar cigarrillos de forma individual o en paquetes de 10 unidades.
- Calcular el precio total de los cigarrillos seleccionados.
- Enviar la lista de pedidos por WhatsApp.
- Interfaz de usuario intuitiva y fácil de usar.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web, que proporciona renderización del lado del servidor y otras características.
- **SHADCN**: Libreria de Tailwind CSS para diseñar interfaces de usuario responsivas y con un estilo moderno.
- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
- **npm**: Gestor de paquetes de Node.js para instalar dependencias y gestionar scripts.
- **WhatsApp API**: Permite enviar mensajes de texto a través de WhatsApp mediante un enlace.

## Instalación

1. Clona este repositorio en tu máquina local:
   git clone <URL_DEL_REPOSITORIO>

2. Navega al directorio del proyecto

3. Instala las dependencias:

npm install

## Configuración

1. Abre el archivo `pages/index.js`.
2. Actualiza el número de teléfono en la variable `numeroTelefono` con el número al que se enviarán los mensajes de WhatsApp.

## Ejecución

Una vez que hayas clonado el repositorio y configurado el número de teléfono, puedes ejecutar el proyecto localmente. Utiliza el siguiente comando:

npm run dev

Esto iniciará la aplicación en tu navegador en `http://localhost:3000`.

## Contribución

Si deseas contribuir a este proyecto, ¡Bienvenida sea! Puedes abrir una nueva solicitud de extracción (pull request) para proponer cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
