// app.js

import { agregarProducto, eliminarProducto, mostrarLista } from './lista.js';

const iniciarApp = () => {

    agregarProducto("Manzanas");
    agregarProducto("Leche");
    agregarProducto("Pan Integral");
    

    agregarProducto("leche"); 

   
    mostrarLista();


    eliminarProducto("Manzanas");
    

    eliminarProducto("Galletas");

  
    mostrarLista();
};


iniciarApp();