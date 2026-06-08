import { filterByLetter, searchEmployees } from './filters.js';
import { renderEmployees } from './render.js';

export function setupEventListeners(allEmployees, filterButtons, searchBar) {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            
            const filter = btn.getAttribute('data-filter');
            const letter = filter === 'all' ? 'all' : filter.split('_')[1];
            const filtered = filterByLetter(allEmployees, letter);
            
            renderEmployees(document.getElementById('employeesGallery'), filtered);
        });
    });

    // Search
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        const filtered = query === '' ? allEmployees : searchEmployees(allEmployees, query);
        renderEmployees(document.getElementById('employeesGallery'), filtered);
    });
}