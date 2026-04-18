import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-auto">
            <div className="container">
                <p className="mb-0">© 2026 Mi Proyecto Web. Todos los derechos reservados.</p>
                <div className="mt-2">
                    <a href="#" className="text-white me-3 text-decoration-none">Privacidad</a>
                    <a href="#" className="text-white text-decoration-none">Contacto</a>
                </div>
            </div>
        </footer>
    );
};