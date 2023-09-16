window.addEventListener('scroll', function() {
    const scrollNavbar = document.getElementById('scroll-navbar');
    const progressBar = document.getElementById('progress-bar');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / scrollHeight) * 100;
  
    if (scrollTop > 100) {
      scrollNavbar.classList.add('show'); // Agrega la clase 'show' para mostrar la barra
      progressBar.style.width = progress + '%';
  
      const originalNavbar = document.querySelector('.navbar-original');
      originalNavbar.style.visibility = 'hidden';
    } else {
      scrollNavbar.classList.remove('show'); // Elimina la clase 'show' para ocultar la barra
      progressBar.style.width = '0';
  
      const originalNavbar = document.querySelector('.navbar-original');
      originalNavbar.style.visibility = 'visible';
    }
});
  
// Función para cerrar la publicidad lateral 1
function closeAdlateral1() {
    const adlateral1 = document.getElementById('adlateral1');
    adlateral1.style.display = 'none';
  }
  
  
  
  