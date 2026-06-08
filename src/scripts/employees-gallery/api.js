const API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchEmployees() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('API Error');
        return await response.json();
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
}