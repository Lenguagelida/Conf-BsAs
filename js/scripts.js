//Linkea el boton de comprar tickets, que esta en el carrusel, hacia la página de compra.
function irAPaginaDeCompra() {
	window.location.href = "pages/ticketPage.html";
}

//Declaraciones para el cálculo del monto de la entrada.
let nodoCantidadTickets = document.getElementById("inputCantidad");
let cantTickets = 1
nodoCantidadTickets.addEventListener('change', ()=>{
    cantTickets = parseInt(nodoCantidadTickets.value);
});

let categoria = document.getElementById("selectCategoria");
let categoriaSeleccionada = "1";
categoria.addEventListener('change', ()=>{
    categoriaSeleccionada = categoria.value;
});

let monto = document.getElementById("resumen");

let nodoForm = document.getElementById("formulario");
nodoForm.addEventListener('submit', ()=>{
    event.preventDefault();

    let totalEntrada;
    switch ((parseInt(categoriaSeleccionada))) {
        case 1:
            totalEntrada = (cantTickets * 200) * 0.2;
            break;
        case 2:
            totalEntrada = (cantTickets * 200) * 0.5;
            break;
        case 3:
            totalEntrada = (cantTickets * 200) * 0.85;
            break;
    }
    monto.innerHTML = "Total a Pagar: " + totalEntrada + "$";
    console.log(totalEntrada)
})