export function filterByLetter(employees, letter) {
    if (letter === 'all') {
        return employees;
    }
    return employees.filter(emp =>
        emp.name.toLowerCase().startsWith(letter.toLowerCase())
    );
}

export function searchEmployees(employees, query) {
    const lowercaseQuery = query.toLowerCase();
    return employees.filter(emp =>
        emp.name.toLowerCase().includes(lowercaseQuery) ||
        emp.email.toLowerCase().includes(lowercaseQuery)
    );
}