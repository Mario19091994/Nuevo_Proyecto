import React from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import bienvenidaImage from './css/images/meme-movie.gif'; // Importa la imagen local

function WelcomeButton() {
  const showWelcomeAlert = () => {
    Swal.fire({
      title: 'Bienvenido',
      text: '¡Gracias por unirte a nosotros! Esperamos que disfrutes de tu experiencia.',
      imageUrl: bienvenidaImage, // Utiliza la importación de la imagen
      imageWidth: 300, // Ancho de la imagen en píxeles
      imageHeight: 300, // Alto de la imagen en píxeles
      imageAlt: 'Bienvenido', // Texto alternativo de la imagen
      showCancelButton: false, // Oculta el botón "Cancelar"
      confirmButtonText: 'Cerrar',
    });
  };

  return (
    <div>
      <Button onClick={showWelcomeAlert}>Show Toast</Button>
    </div>
  );
}

export default WelcomeButton;
