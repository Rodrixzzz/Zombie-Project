/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var posiciones = {
  derecha: 'der',
  arriba: 'arriba',
  abajo: 'abajo',
  izquierda: 'izq'
} 
var imagenesAuto = {
  derecha: 'imagenes/auto_rojo_derecha.png',
  arriba: 'imagenes/auto_rojo_arriba.png',
  abajo: 'imagenes/auto_rojo_abajo.png',
  izquierda: 'imagenes/auto_rojo_izquierda.png'
}
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  mover: function (x,y) {
    this.x += x;
    this.y += y;
  },
  cambiarImagen: function(posicion){
    var self=this;
    switch(posicion)
    {
      case posiciones.abajo:
        invertirDimensiones();
        this.sprite = imagenesAuto.abajo;
        break;
      case posiciones.arriba:
        invertirDimensiones();
        this.sprite = imagenesAuto.arriba;
        break;
      case posiciones.derecha:
        invertirDimensiones();
        this.sprite = imagenesAuto.derecha;
        break;
      case posiciones.izquierda:
        invertirDimensiones();
        this.sprite = imagenesAuto.izquierda;
        break;
    }
    function invertirDimensiones() {
      if(posicion === posiciones.derecha || posicion === posiciones.izquierda ){
        console.log(posicion);
        self.ancho = 30;
        self.alto = 15;
      }
      else{
        self.ancho = 15;
        self.alto = 30;
      }
    }
  },
  perderVidas: function (cantidad) {
    this.vidas -= cantidad;
  }
}
