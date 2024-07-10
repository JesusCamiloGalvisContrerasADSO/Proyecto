document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.querySelector('.modificar__animal--checkbox');
    const container = checkbox.closest('.modificar__animal');
  
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        container.classList.add('modificar__animal--checked');
      } else {
        container.classList.remove('modificar__animal--checked');
      }
    });
  });
  

  