var Modelo = function() {
      this.preguntas = [];
      this.ultimoId = 0;
      this.preguntaAgregada = new Evento(this);
      this.preguntaEliminada = new Evento(this);                                           //AGREGADO                                          

};

Modelo.prototype = {
  
      //se obtiene el id mÃ¡s grande asignado a una pregunta
      obtenerUltimoId: function() {
            var ultimoId=this.preguntas.length-1;                                           //AGREGADO
            return ultimoId;                                                              //AGREGADO
      },

      agregarPregunta: function(nombre, respuestas) {                                    //se agrega una pregunta dado un nombre y sus respuestas
            var id = this.obtenerUltimoId();
            id++;
            var nuevaPregunta = {'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas};
            this.preguntas.push(nuevaPregunta);
            this.guardar();
            this.preguntaAgregada.notificar();
      },

      borrarPregunta: function(id){                                        //AGREGADO
            this.preguntas.splice(id,1);
            this.preguntaEliminada.notificar();                                             //AGREGADO
      },                                                                                  //AGREGADO                                          

      borrarTodo: function(){
            this.preguntas.splice(0, this.preguntas.length);
            this.preguntaEliminada.notificar();
      },
 
      guardar: function(){                                                               //se guardan las preguntas //alis aca va localstorage
      },
};


