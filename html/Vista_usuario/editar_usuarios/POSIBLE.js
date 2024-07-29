document.addEventListener('DOMContentLoaded', () => {
    const users = [
        {
            name: "Juan Fernando Hernandez Prada",
            cc: "1092345345",
            phone: "3209079545",
            email: "jgalviscontreras38@gmail.com",
            address: "Km 10, vía piedecuesta vereda la mata, parcela benita",
            birthDate: "17/04/2000",
            contractStartDate: "17/04/2024",
            grade: "A +"
        },
        {
            name: "Juan Fernando Hernandez Prada",
            cc: "1092345345",
            phone: "3209079545",
            email: "jgalviscontreras38@gmail.com",
            address: "Km 10, vía piedecuesta vereda la mata, parcela benita",
            birthDate: "17/04/2000",
            contractStartDate: "17/04/2024",
            grade: "B +"
        },
        {
            name: "Juan Fernando Hernandez Prada",
            cc: "1092345345",
            phone: "3209079545",
            email: "jgalviscontreras38@gmail.com",
            address: "Km 10, vía piedecuesta vereda la mata, parcela benita",
            birthDate: "17/04/2000",
            contractStartDate: "17/04/2024",
            grade: "A +"
        }
    ];

    const userList = document.getElementById('user-list');

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <div class="user-info">
                <div class="avatar"></div>
                <div class="details">
                    <p><strong>${user.name}</strong></p>
                    <p>C.C ${user.cc}</p>
                </div>
            </div>
            <div class="contact-info">
                <p>Teléfono: ${user.phone}</p>
                <p>Email: ${user.email}</p>
            </div>
            <div class="address-info">
                <p>Dirección: ${user.address}</p>
                <p>Fecha nacimiento: ${user.birthDate}</p>
                <p>Fecha inicio contrato: ${user.contractStartDate}</p>
            </div>
            <div class="grade">
                <p>${user.grade}</p>
            </div>
        `;
        userList.appendChild(userDiv);
    });
});
