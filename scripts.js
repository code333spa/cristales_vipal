function mostrarSede() {
    const sedeImagen = document.getElementById('sedeImagen');
    
    // Mostrar u ocultar la imagen de la sede
    if (sedeImagen.style.display === 'none' || sedeImagen.style.display === '') {
        sedeImagen.style.display = 'block';

        // Desplazarse suavemente hacia la sección de la sede
        sedeImagen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        sedeImagen.style.display = 'none';
    }
}