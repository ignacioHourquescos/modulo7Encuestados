var mascota =function(nombre, edad,color){
  this.nombre=nombre;
  this.edad=edad;
  this.color=color;
  this.perdido=true;
  this.observadores=[];
}

mascota.prototype.encontrarMascota = function(){
  this.perdido=false;
  this.notificarObservadores();
}

mascota.prototype.registrarObservador = function(observador){
  this.observadores.push(observador);
}

mascota.prototype.eliminarObservador = function(observador){
  var index=this.observadores.indexOf(observador);
  this.observadores.splice(index,1);
}

mascota.prototype.notificarObservadores = function(){
  var nroObservadores=this.observadores.length;
  for(var i=0;i<nroObservadores;i=i+1){
    this.observadores[i].notificar();
}
}






////////////////////////////////////




//Evento
var Evento = function(sujeto) {
  this._sujeto = sujeto;
  this._observadores = [];
};

Evento.prototype = {
  suscribir: function(observador) {
    this._observadores.push(observador);
  },
  notificar: function(args) {
    for (var i = 0; i < this._observadores.length; i++) {
      this._observadores[i](this._sujeto, args);
    }
  }
};

var Automatizador = function(){
  this.llegoNoticia = new Evento();
  this.nuevaNoticia = function(){
    this.llegoNoticia.notificar();
  }
}

var automatizador = new Automatizador()

var RobotPeriodista = function(automatizador){
  this.automatizador = automatizador
  this.automatizador.llegoNoticia.suscribir( function() { console.log('Noticia recibida') });
}

var robot = new RobotPeriodista(automatizador);




