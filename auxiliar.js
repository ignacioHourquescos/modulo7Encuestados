/////////////////////////////////////////////////////////PATRON CONSTRUCTOR

function Auto (marca,modelo){
      this.marca=marca;
      this.modelo=modelo;
}

//INSTANCIAR OBEJTO
var auto1 = new Auto('Honda','Rojo');

//ASIGANAR FUNCIONALIDAD A LOS OBEJTOS
Auto.prototype.cambiarColor = function(color){
      this.color=color
}

///PATRONES ESTRUCUTRALES
/////////////////////////////////////////////////////////PATRONES DECORATOR (solo a un objeto determinado)
function Dragon(nombre,color){
      this.nombre=nombre;
      this.color=color;
}

//INSTANCIO UN DRAGON
var dragonCamaleon = new Dragon('Finn','Azul');

dragonCamaleon.cambiarColor=function(color){
      this.color=color;
}



/////////////////////////////////////////////////////////PATRONES DE COMPORTAMIENTO
Permite notificar cambios a otros objetos que estan escuchando
El obejto observado es el sujeto y obervadores 

///////////////////////PUBLISHER - SUBSCRIBER

function caja (){
      this.cobrar=function(){
            console.log("Cafe corbado");
      };
}

var caja1 = new caja;

function maquinaCafe(){
      this.hacerCafe =function(){
            console.log("Cafe hecho");
      };
}

class maquinaCafe {
      constructor() {
            this.hacerCafe = function () {
                  console.log("Cafe hecho");};}}

var maquina1 = new maquinaCafe;

class registradoradepedidos {
      constructor() {
            this.anotarpedidos = function () {
                  caja1.cobrar();
                  maquina1.hacerCafe();
            };
      }
}

var registradora = new registradoradepedidos;

/////Este seria el modelo anterior, el de arriba. ahor pasamos a subject object
/// El ppal cambio va a estar en el eobjeto registrador de pedidos

function registradoradepedidos(){
      this.observadores=[];
      this.anotarpedidos=function(){
            this.notificarObservadores();
      };
}

registradoradepedidos.prototype.registrarObservador = function(observer){
      this.observadores.push(observer);
}

registradoradepedidos.prototype.removerObservador = function(observer){
      var index=this.observadores.indexOf(observer);
      this.observadores.splice(index,1);
}

registradoradepedidos.prototype.notificarObservadores=function(){
      for (var i=0, max=this.observadores.length; i<max;i +=1 ){
            this.observadores[i].notificar();
      }
}


function caja(){
      this.cobrar= fucntion(){
            console.log("cafe cobrado");
      }
}

var caja1=new caja();

caja1.notificar =function(){
      this.cobrar();
      }

function maquinaCafe() { 
      this.hacerCafe=function(){
            console.log("cafe hecho");
      }
}

var maquina1=new maquinaCafe();

maquina1.notificar = function(){
      this.hacerCafe();
}


//////////////////////////////////////////////////////////OBSERVAR UN EVENTO
var persona = function(){
      this.nombre= nombre;
      this.nombreACtualizado = new Evento(this);
}

persona.prototype.cambiarnombre = function(nuevoNombre){
      this.nombre=nuevoNombre;
      this.nombreACtualizado.notificar();
}

var juan=new persona('Juan');

var monitorDeNombre = function(persona){
      this.persona = persona;
      var that = this;
      this.persona.nombreACtualizado.suscribit(function(){
            console.log(that.persona.nombre);
      })
}

var monitorDeJuan = monitordeNombre(Juan);

var Evento = function(sujeto){
      this._sujeto=sujeto;
      this._observadores=[];
};

Evento.prototype = {
      suscribir: function(observador){
            this._observadores.push(observador);
      },
      notificar: function(args){
            for (var i=0; i<this._observadores.length;i++){
                  this._observadores[i](this._sujeto,args);
            }
      }
};

///////////////////////////////////////PATRON MODULO 
(function ()
{aaaaa})()


var moduloContador = (function(){
      var contadorPrivado=0;
      return {
            incrementarContador: function(){
                  return contadorPrivado ++;
            },
            resetearContador: function(){
                  console.log("valor del contador  precio a reset: "+ contadorPrivado);
                  contadorPrivado=0;
            }
      };
})();


///////////////////////////////////////MODELO
//modelo de tareas
var modeloTareas = {
      tareas: [],
      agregarTarea: function(tarea){
            tareas.push(tarea);
      }
}

//modelo de usuario
var modeloUsuario = function (nombre,edad){
      this.nombre=nombre;
      this.edad=edad;
}

modeloUsuario.prototype.cambiarNombre=function(nuevoNombre){
      this.nombre=nuevoNombre;
}

/////////////////////ACTIVIDAD MASCOTA PERDIDA
var mascota = function(nombre,edad,colorPelo){
      this.nombre=nombre;
      this.edad=edad;
      this.colorPelo=colorPelo;
      this.perdida=true;
      this.observers=[];
}

mascota.prototype.encontrarMascota=function(){
      this.perdida=false;
      this.notificarObservadores();
}

mascota.prototype.agregarObservador=function(observador){
      this.observers.push(observador);
}

mascota.prototype.removerObservador=function(observador){
      var index = this.observers.indexOf(observador);
      this.observers.splice(index,1);
}

mascota.prototype.notificarObservador=function(){
      for (var i=0;i<this.observers.length;i+=i){
            this.obervers[i].notificar();
      }
}

/////////////////////////////////////LOCALSOTRAGE
localStorage.setItem("clave","valor");
localStorage.getItem("clave");

var Libro = function(libro,autor){
      this.libro=libro,
      this.autor=autor,
}      

var libro1=new Libro("Cortazar","Rayuela");

localStorage.setitem("Libro", JSON.stringify(libro1));


/////////////////////////////////////ROBOT PERIODISTA
periodista - MODEL
Automatizador de noticias - CONTROLER
Robot periodista - VIEW

var Periodista = function(){

}





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
  this.llegoNoticia = new Evento(sujeto);
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

/////////////////////////////////////7///////////////////////////////////////////MVC VISTA
//LIBRERIA

var Libro =function(titulo, autor, resumen,precio){
      this.titulo=titulo;
      this.autor=autor;
      this.resumen=resumen;
      this.precio=precio;
      this.observers=[];
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
            for (var i=0; i<this.observers.length; i+=1){
                  this.observers[i].notificar();
            }
      },
      cambiarPrecio : function(nuevoPrecio){
            this.precio=nuevoPrecio;
            this.notificarObservadores();
      },
      cambiarTitulo : function(nuevoTitulo){
            this.titulo=nuevoTitulo;
            this.notificarObservadores();
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
      console.log('Titualo: ',this.modelo.titulo,'Autor:',this.modelo.autor);
}

//VISTA COMPLEJA
var VistaCompleja=function(modelo){
      this.modelo=modelo;
      this.modelo.agregarObservador(this);
}

VistaCompleja.prototype.notificar=function(){
      this.mostrar();
}

VistaCompleja.prototype.mostrar=function(){
      console.log('Titualo: ',this.modelo.titulo,'Autor:',this.modelo.autor, "Precio",this.modelo.precio);
}

//VISTA TITULO EJERCICIO
var VistaTitulo=function(modelo){
      this.modelo=modelo;
      this.modelo.agregarObservador(this);
}

VistaTitulo.prototype.notificar=function(){
      this.mostrar();
}

VistaTitulo.prototype.mostrar=function(){
      console.log("Titulo: ",this.modelo.titulo)
}

//////////////////////////////////////////////////CONTROLADOR

//MODELO
var Controlador = function(model){
      this.modelo=model;
} 

Controlador.prototype={
      contadorClickeado: function(){
            this.modelo.incrementarContador();
      },
};

var Vista = function(modelo,controlador){
      this.modelo=modelo;
      this.controlador=controlador;
      this.boton=$('#boton');
      var that=this;
      this.boton.click(function(){
            that.controlador.contadorClickeado()
      });
      this.modelo.contadorModificado.suscribir(function(){
            $('contador').text(that.modelo.contador);
      })
}

Var 

//CONTROLADOR
$("#botonIncremento").click(function(){
 Contador.contador+=1;
})

//////////////////////////////////////////MAPA MVC TP


VISTA VistaAdministrador
      inicializar;
            reconstruirLista 
            configuracionBototnes
            validacionFormulario
      construirElementopregunta;
      reconstruirLista;
      configuracionDeBotones;
      limpiarFormulario;

MODELO Modelo
      obtenerUltimoID
      agregarPregunta
      guardar

CONTORLADOR Controlador
      agregarPregunta
      
evento Evento
      suscribir
      notificar

      





























//VISTA
var vistaContador = Contador.contador;


























