export function createEmployeeCard(employee) {
    return `
        <div class="employee-card" data-name="${employee.name.toLowerCase()}">
            <div class="employee-avatar">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=random" alt="${employee.name}">
            </div>
            <div class="employee-info">
                <h3>${employee.name}</h3>
                <p class="employee-email">Email: ${employee.email}</p>
                <p class="employee-street">Calle: ${employee.address.street}</p>
                <p class="employee-suite">Suite: ${employee.address.suite}</p>
                <p class="employee-city">Ciudad: ${employee.address.city}</p>
                <p class="employee-zipcode">Código postal: ${employee.address.zipcode}</p>
            </div>
        </div>
    `;
}

export function renderEmployees(gallery, employees) {
    if (employees.length === 0) {
        gallery.innerHTML = '<p>No se encontraron empleados</p>';
        return;
    }
    gallery.innerHTML = employees.map(emp => createEmployeeCard(emp)).join('');
}

export function showError(gallery, message) {
    gallery.innerHTML = `<p>${message}</p>`;
}