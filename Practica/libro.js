var Libro = function(titulo, autor, resumen, precio) {
  this.titulo = titulo;
  this.autor = autor;
  this.resumen = resumen;
  this.precio = precio;
  this.observadores = [];
}

Libro.prototype.cambiarPrecio = function(nuevoPrecio) {
  this.precio = nuevoPrecio;
  this.notificarObservadores();
}

Libro.prototype.cambiarTitulo = function(nuevoTitulo) {
  this.titulo = nuevoTitulo;
  this.notificarObservadores();
}

Libro.prototype.registrarObservador = function(observer) {
  this.observadores.push(observer);
}

Libro.prototype.removerObservador = function(observer) {
  var index = this.observadores.indexOf(observer);
  this.observadores.splice(index, 1);
}

Libro.prototype.notificarObservadores = function() {
  for (var i = 0, max = this.observadores.length; i < max; i += 1) {
    this.observadores[i].notificar();
  }
}
