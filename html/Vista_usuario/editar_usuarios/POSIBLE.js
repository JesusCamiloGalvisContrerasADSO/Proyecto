document.addEventListener('DOMContentLoaded', () => {
    const users = [
        {
            name: 'Juan Fernando Hernandez Prada',
            id: '1092345345',
            phone: '3209079545',
            email: 'jgalviscontreras38@gmail.com',
            address: 'Km 10, vía piedecuesta vereda la mata, parcela benita',
            birthDate: '17/04/2000',
            contractStartDate: '17/04/2024',
            bloodType: 'A +'
        },
        {
            name: 'Juan Fernando Hernandez Prada',
            id: '1092345345',
            phone: '3209079545',
            email: 'jgalviscontreras38@gmail.com',
            address: 'Km 10, vía piedecuesta vereda la mata, parcela benita',
            birthDate: '17/04/2000',
            contractStartDate: '17/04/2024',
            bloodType: 'B +'
        },
        {
            name: 'Juan Fernando Hernandez Prada',
            id: '1092345345',
            phone: '3209079545',
            email: 'jgalviscontreras38@gmail.com',
            address: 'Km 10, vía piedecuesta vereda la mata, parcela benita',
            birthDate: '17/04/2000',
            contractStartDate: '17/04/2024',
            bloodType: 'A +'
        }
    ];

    const table = document.getElementById('users-table');

    users.forEach(user => {
        const row = document.createElement('tr');
        row.className = 'table-container__row';

        const iconCell = document.createElement('td');
        iconCell.className = 'table-container__cell table-container__cell--icon';
        const iconImg = document.createElement('img');
        iconImg.src = 'icon-user.png';
        iconImg.alt = 'User Icon';
        iconCell.appendChild(iconImg);
        row.appendChild(iconCell);

        const nameCell = document.createElement('td');
        nameCell.className = 'table-container__cell';
        nameCell.innerHTML = `<p><strong>${user.name}</strong></p><p>C.C ${user.id}</p>`;
        row.appendChild(nameCell);

        const contactCell = document.createElement('td');
        contactCell.className = 'table-container__cell';
        contactCell.innerHTML = `<p>Teléfono: ${user.phone}</p><p>Email: ${user.email}</p>`;
        row.appendChild(contactCell);

        const addressCell = document.createElement('td');
        addressCell.className = 'table-container__cell';
        addressCell.innerHTML = `<p>Dirección: ${user.address}</p><p>Fecha nacimiento: ${user.birthDate}</p><p>Fecha inicio contrato: ${user.contractStartDate}</p>`;
        row.appendChild(addressCell);

        const bloodTypeCell = document.createElement('td');
        bloodTypeCell.className = 'table-container__cell table-container__cell--blood-type';
        bloodTypeCell.innerHTML = `<strong>${user.bloodType}</strong>`;
        row.appendChild(bloodTypeCell);

        table.appendChild(row);
    });
});
