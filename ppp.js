document.getElementById('add-button').addEventListener('click', () => {
    document.getElementById('add-animal-form').style.display = 'block';
});

document.getElementById('new-animal-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nuevoAnimal = {
        numero: document.getElementById('numero').value,
        raza: document.getElementById('raza').value,
        sexo: document.getElementById('sexo').value,
        pesoAnterior: document.getElementById('pesoAnterior').value,
        pesoNuevo: document.getElementById('pesoNuevo').value,
        ganancia: document.getElementById('ganancia').value,
        fechaRevision: document.getElementById('fechaRevision').value,
        fechaVenta: document.getElementById('fechaVenta').value,
    };

    try {
        const response = await fetch('/api/animals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoAnimal),
        });

        if (response.ok) {
            const animalAgregado = await response.json();
            agregarAnimalATabla(animalAgregado);
            document.getElementById('add-animal-form').style.display = 'none';
            document.getElementById('new-animal-form').reset();
        } else {
            throw new Error('Error al agregar el animal');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

function agregarAnimalATabla(animal) {
    const tabla = document.getElementById('animal-table-body');
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${animal.numero}</td>
        <td>${animal.raza}</td>
        <td>${animal.sexo}</td>
        <td>${animal.pesoAnterior}</td>
        <td>${animal.pesoNuevo}</td>
        <td>${animal.ganancia}</td>
        <td>${animal.fechaRevision}</td>
        <td>${animal.fechaVenta}</td>
        <td><button class="history-button">Historia Clínica</button></td>
    `;

    // Aplica las mismas clases de estilo
    fila.className = 'data-row'; // Asigna la clase de estilo correcta
    tabla.appendChild(fila);
}
