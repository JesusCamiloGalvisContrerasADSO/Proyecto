document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los botones con la clase 'boton--eliminar'
    const botones = document.querySelectorAll(".boton--eliminar");

    // Itera sobre cada botón y agrega el event listener
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            // Evita la acción predeterminada si hay un atributo 'href' en el botón
            e.preventDefault();

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    // Aquí podrías agregar código adicional para manejar la eliminación
                }
            });
        });
    });
});


  