let allEmployees = [];
const API_URL = 'https://jsonplaceholder.typicode.com/users';
const gallery = document.getElementById('employeesGallery');
const filterButtons = document.querySelectorAll('.filter-buttons-btn');
const searchBar = document.getElementById('search-bar');

async function fetchEmployees() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        allEmployees = data;
        displayEmployees(allEmployees);
        setupEventListeners();
    } catch (error) {
        console.error('Error fetching employees:', error);
        gallery.innerHTML = `<p>Error al cargar empleados</p>`;
    }
}

function createEmployeesCards(employee) {
    return `
        <div class="employee-card" data-name="${employee.name.toLowerCase()}">
            <div class="employee-avatar">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=random" alt="${employee.name}">
            </div>
            <div class="employee-info">
                <h3>${employee.name}</h3>
                <p class="employee-email">Email: ${employee.email}</p>
                <p class="employee-street">Calle: ${employee.address.street}</p>
                <p class="employee-city">Ciudad: ${employee.address.city}</p>
                <p class="employee-zipcode">Código postal: ${employee.address.zipcode}</p>
            </div>
        </div>
    `;
}

function displayEmployees(employees) {
    if (employees.length === 0) {
        gallery.innerHTML = `<p>No se encontraron empleados</p>`;
        return;
    }

    gallery.innerHTML = employees.map(emp => createEmployeesCards(emp)).join('');
}

function filterByLetter(letter) {
    if (letter === 'all') {
        displayEmployees(allEmployees);
    } else {
        const filtered = allEmployees.filter(emp =>
            emp.name.toLowerCase().startsWith(letter.toLowerCase())
        );
        displayEmployees(filtered);
    }
}

function searchEmployees(query) {
    const lowercaseQuery = query.toLowerCase();
    const filtered = allEmployees.filter(emp => 
        emp.name.toLowerCase().includes(lowercaseQuery) ||
        emp.email.toLowerCase().includes(lowercaseQuery)
    );
    displayEmployees(filtered);
}

function setupEventListeners() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const filter = btn.getAttribute('data-filter');
            const letter = filter === 'all' ? 'all' : filter.split('_')[1];
            filterByLetter(letter);
        });
    });

    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query === '') {
            displayEmployees(allEmployees);
        } else {
            searchEmployees(query);
        }
    });
}

fetchEmployees();