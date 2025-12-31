import navbar from "./components/navbar";

const initApp = () => {
    console.log("App initialized");
    // obtener la referencia al contenedor de Navbar por su id
    const navbarContainer = document.getElementById ("main-header");
    navbarContainer.innerHTML = navbar();
    setupEventListener();

};

export {initApp}; // exportacion nombrada