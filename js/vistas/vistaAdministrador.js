var VistaAdministrador = function(modelo, controlador, elementos) {
      this.modelo = modelo;
      this.controlador = controlador;
      this.elementos = elementos;
      var contexto = this;  
      this.modelo.preguntaAgregada.suscribir(function() {             // suscripción de observadores
            contexto.reconstruirLista();
      });
      this.modelo.preguntaEliminada.suscribir(function(){
            contexto.reconstruirLista();
      })
};


VistaAdministrador.prototype = {

      inicializar: function() {
            this.reconstruirLista();                                    //agregado
            this.configuracionDeBotones();                              //agregado
            validacionDeFormulario();
      },

      construirElementoPregunta: function(pregunta){
            var contexto = this;
            var nuevoItem;
            nuevoItem = $(document.createElement('li'));
            nuevoItem.addClass('list-group-item');
            nuevoItem.attr('id', pregunta.id);
            nuevoItem.text(pregunta.textoPregunta);
            
            var interiorItem = $('.d-flex');                             
            var titulo = interiorItem.find('h5');
            titulo.text(pregunta.textoPregunta);
            interiorItem.find('small').text(pregunta.cantidadPorRespuesta.map(function(resp){
                  return + " " + resp.textoRespuesta;
            }));
            nuevoItem.html($('.d-flex').html());
            return nuevoItem;
      },    

      reconstruirLista: function() {
            var lista = this.elementos.lista;
            lista.html('');
            var preguntas = this.modelo.preguntas;
            for (var i=0;i<preguntas.length;++i){
                  lista.append(this.construirElementoPregunta(preguntas[i]));
            }
      },

      configuracionDeBotones: function(){
            var e = this.elementos;
            var contexto = this;

            //asociacion de eventos a boton agregarPregutna
            e.botonAgregarPregunta.click(function() {                   
                  var value = e.pregunta.val();
                  var respuestas = [];
                  $('[name="option[]"]').each(function() {                                                 
                        var respuesta = { 'textoRespuesta': $(this).val(), 'cantidad': 0 };                 //AGREGADO
                        if ($(this).val() != "") {                                                          //AGREGADO
                            respuestas.push(respuesta);                                                     //AGREGADO
                        }
                    });
                  contexto.limpiarFormulario();
                  contexto.controlador.agregarPregunta(value, respuestas);
            });


            e.botonBorrarPregunta.click(function(){      
                  console.log("boton borrar");                                                   //AGREGADO
                  var id = parseInt($('.list-group-item.active').attr('id'));
                  console.log(id);                               //AGREGADO
                  contexto.controlador.borrarPregunta(id);                                                  //AGREGADO
            })
        //asociar el resto de los botones a eventos
      },

      limpiarFormulario: function(){
            $('.form-group.answer.has-feedback.has-success').remove();
      },
};
