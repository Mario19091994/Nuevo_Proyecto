import React from 'react';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import Milos from './css/images/meme-movie.gif'; // Importa la imagen local

function RicardoMilos() {
  const showWelcomeAlert = () => {
    Swal.fire({
      title: '¿En serio?',
      text: '¿¿En sero??',
      imageUrl:  Milos, // Utiliza la importación de la imagen
      imageWidth: 300, // Ancho de la imagen en píxeles
      imageHeight: 300, // Alto de la imagen en píxeles
      imageAlt: 'Bienvenido', // Texto alternativo de la imagen
      showCancelButton: false, // Oculta el botón "Cancelar"
      confirmButtonText: 'Cerrar',
    });
  };

  return (
    <div>
      <Button onClick={showWelcomeAlert}>Porfavor, no tocar</Button>
    </div>
  );
}

export default RicardoMilos;
