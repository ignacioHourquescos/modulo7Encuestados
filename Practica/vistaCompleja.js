var vistaCompleja = function(modelo) {
  this.modelo = modelo;
}

vistaCompleja.prototype.notificar = function() {
  this.mostrar();
}
vistaCompleja.prototype.mostrar = function() {
  console.log('Titulo: ', this.modelo.titulo, ' Autor: ', this.modelo.autor);
  console.log('Resumen: ', this.modelo.resumen, ' Precio: ', this.modelo.precio);
}
