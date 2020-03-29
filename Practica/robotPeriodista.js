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
    // Notificar a travÃŠs del evento llegÃŗNoticia que llegÃŗ una nuevaNoticia
  }
}

var RobotPeriodista = function(automatizador){
  this.automatizador = automatizador
  this.automatizador.llegoNoticia.suscribir( function() { console.log('Noticia recibida') });
}

var automatizador = new Automatizador()
var robot = new RobotPeriodista(automatizador);