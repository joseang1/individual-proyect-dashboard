import { fetchEmployees } from './api.js';
import { renderEmployees, showError } from './render.js';
import { setupEventListeners } from './events.js';

const gallery = document.getElementById('employeesGallery');
const filterButtons = document.querySelectorAll('.filter-buttons-btn');
const searchBar = document.getElementById('search-bar');

async function initialize() {
    try {
        const employees = await fetchEmployees();
        renderEmployees(gallery, employees);
        setupEventListeners(employees, filterButtons, searchBar);
    } catch (error) {
        showError(gallery, 'Error al cargar empleados');
    }
}

initialize();