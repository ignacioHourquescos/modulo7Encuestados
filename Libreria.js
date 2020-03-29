
var Libro =function(titulo, autor, resumen,precio){
      this.titulo=titulo;
      this.autor=autor;
      this.resumen=resumen;
      this.precio=precio;
      this.observers=[];
}

Libro.prototype.cambiarPrecio = function(nuevoPrecio){
      this.precio=nuevoPrecio;
      this.notificarObservadores();
}

Libro.prototype.cambiarTitulo = function(nuevoTitulo){
      this.titulo=nuevoTitulo;
      this.notificarObservadores();
}


Libro.prototype={
      agregarObservador:function(observador){
            this.observers.push(observador);
      },
      eliminarobservador:function(observador){
            var index=this.observers.indexOf(observador);
            this.observers.splice(index,1);
      },
      notificarObservadores:function(){
            for (var i=0; i<this.observers.length; i+=i){
                  this.observer[i].notificar();
            }
      }
}

//VISTA SIMPLE
var VistaSImple=function(modelo){
      this.modelo=modelo;
      this.modelo.agregarObservador(this);
}

VistaSImple.prototype.notificar=function(){
      this.mostrar();
}

VistaSImple.prototype.mostar=function(){
      console.log("dddd");
}
