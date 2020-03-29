var Mascota =function(nombre, edad,color){
  this.nombre=nombre;
  this.edad=edad;
  this.color=color;
  this.perdido=true;
  this.observadores=[];
}

Mascota.prototype.encontrarMascota = function(){
  this.perdido=false;
  this.notificarObservadores();
}

Mascota.prototype.registrarObservador = function(observador){
  this.observadores.push(observador);
}

Mascota.prototype.notificar = function(){
  console.log("mascota enocntrada");
}

Mascota.prototype.eliminarObservador = function(observador){
  var index=this.observadores.indexOf(observador);
  this.observadores.splice(index,1);
}

Mascota.prototype.notificarObservadores = function(){
  var nroObservadores=this.observadores.length;
  for(var i=0;i<nroObservadores;i=i+1){
    this.observadores[i].notificar();    
  }
}




