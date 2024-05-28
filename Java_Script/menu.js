function mostrar(pagina) {
    // Oculta todas as páginas
    var paginas = document.querySelectorAll('.pagina');
    for (var i = 0; i < paginas.length; i++) {
      paginas[i].classList.remove('active');
    }
  
    // Exibe a página correspondente ao item do menu selecionado
    document.getElementById(pagina).classList.add('active');
  }
  
  // Toggle para mostrar/ocultar submenu
  document.querySelectorAll('.submenu').forEach(function(submenu) {
    submenu.addEventListener('click', function() {
      var submenuContent = this.querySelector('.submenu-content');
      submenuContent.classList.toggle('show');
    });
  });
  