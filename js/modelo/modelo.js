/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
    if (this.preguntas.length === 0){
      //arreglo vacio
      return 0;
      }
    else {
      //recupero el id de la ultima posicion, como se agregan ordenados siempre es el mayor
      return this.preguntas[this.preguntas.length-1].id;
  }
  },

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function(nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;
    var nuevaPregunta = {'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas};
    this.preguntas.push(nuevaPregunta);
    //------------DE ACA PAR AABAJO CODIGO AGREGADO---------------------
    

    //------------DE ACA PARA ARRIBA CODIGO AGRRGADO------------------
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  //se guardan las preguntas
  guardar: function(){
  },
};
