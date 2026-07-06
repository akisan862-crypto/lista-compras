


const listaDeCompras = [];


export const agregarProducto = (producto) => {
  
    const existe = listaDeCompras.some(item => item.toLowerCase() === producto.toLowerCase());
    
    if (!existe) {
        listaDeCompras.push(producto);
        console.log(` '${producto}' agregado a la lista.`);
    } else {
        console.log(`'${producto}' ya está en la lista. No se agregó.`);
    }
};


export const eliminarProducto = (producto) => {
    
    const index = listaDeCompras.findIndex(item => item.toLowerCase() === producto.toLowerCase());
    
    if (index !== -1) {
       
        listaDeCompras.splice(index, 1);
        console.log(` '${producto}' eliminado de la lista.`);
    } else {
        console.log(` No se encontró '${producto}' en la lista.`);
    }
};


export const mostrarLista = () => {
    console.log("\n---  Lista de Compras ---");
    
    if (listaDeCompras.length === 0) {
        console.log("La lista está vacía.");
    } else {
        listaDeCompras.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto}`);
        });
    }
    
    console.log("---------------------------\n");
};