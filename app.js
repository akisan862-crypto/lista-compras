// app.js

import { agregarProducto, eliminarProducto, mostrarLista } from './lista.js';

const iniciarApp = () => {
    // 1. Probamos agregar productos
    agregarProducto("Manzanas");
    agregarProducto("Leche");
    agregarProducto("Pan Integral");
    
    // 2. Probamos la validación de duplicados (debe marcar error)
    agregarProducto("leche"); 

    // 3. Mostramos la lista actual
    mostrarLista();

    // 4. Probamos eliminar un producto
    eliminarProducto("Manzanas");
    
    // 5. Probamos eliminar algo que no existe
    eliminarProducto("Galletas");

    // 6. Mostramos la lista final
    mostrarLista();
};

// Ejecutamos la aplicación
iniciarApp();