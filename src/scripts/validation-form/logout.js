import { sessionManager } from './sessionManager.js';

export function logout() {
    sessionManager.destroySession();
    console.log('✅ Sesión cerrada correctamente');
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 300);
}


document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
                logout();
            }
        });
        console.log('✅ Botón de logout configurado');
    } else {
        console.warn('⚠️ Botón de logout no encontrado');
    }
});

window.logout = logout;
