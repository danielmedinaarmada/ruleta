
class Juego {
  constructor(){
    this.inicializar()
  }

  inicializar(){
    this.Mensaje = this.Mensaje.bind(this)
    this.dibujarIndicador = this.dibujarIndicador.bind(this)
    this.segments = [ // Datos de los segmentos
      { 'fillStyle': '#f1c40f', 'text': 'CSharp' },
      { 'fillStyle': '#2ecc71', 'text': 'JavaScript' },
      { 'fillStyle': '#e67e22', 'text': 'Python' },
      { 'fillStyle': '#e74c3c', 'text': 'Php' },
      { 'fillStyle': '#8e44ad', 'text': 'Go' },
    ];

    this.miRuleta = new Winwheel({
      'numSegments': 5, // Número de segmentos
      'outerRadius' : 170, // Radio externo
      'segments': this.segments ,
      'animation': {
      'type': 'spinToStop', // Giro y alto
      'duration': 5, // Duración de giro
      'callbackFinished': 'Mensaje()', // Función para mostrar mensaje
      'callbackAfter': 'dibujarIndicador()' // Funciona de pintar indicador
      }
    });

    this.miRuleta.startAnimation();
  }

  Mensaje() {
    var SegmentoSeleccionado = this.miRuleta.getIndicatedSegment();
    alert("Elemento seleccionado:" + SegmentoSeleccionado.text + "!");
    this.miRuleta.stopAnimation(false);
    this.miRuleta.rotationAngle = 0;
    this.miRuleta.draw();
    dibujarIndicador();
  }

  dibujarIndicador(){
    var ctx = this.miRuleta.ctx;
    ctx.strokeStyle = 'navy';
    ctx.fillStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(170, 0);
    ctx.lineTo(230, 0);
    ctx.lineTo(200, 40);
    ctx.lineTo(171, 0);
    ctx.stroke();
    ctx.fill();
  }


}


function empezarJuego(){
  var juego = new Juego();
}

