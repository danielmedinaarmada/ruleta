class Juego {
  constructor(){
    this.divAyuda = document.getElementById('ayuda');
    debugger
    this.inicializar()
    this.toggleEmpezar()
  }

  inicializar(){
    this.theWheel = new Winwheel({
      'canvasId'      : 'WinWheel',
      'numSegments'   : 5,
      'outerRadius'   : 200,
      'segments'      : [
        { 'fillStyle' : '#FFFF00', 'text' : 'Pregunta 1' },
        { 'fillStyle' : '#6600FF', 'text' : 'Pregunta 2' },
        { 'fillStyle' : '#FF6600', 'text' : 'Pregunta 3' },
        { 'fillStyle' : '#66CC00', 'text' : 'Pregunta 4' },
        { 'fillStyle' : '#CC3300', 'text' : 'Pregunta 5' }
      ],
      'pins' : {
        'number' : 15
      },
      'animation': {
        'type'          : 'SpinToStop',
        'duration'      :  5,
        'spins'         :  5
      }
    })
this
    this.theWheel.startAnimation()
  }
  

  toggleEmpezar(){
    if(this.divAyuda.classList.contains('hide')){
      this.divAyuda.classList.remove('hide')
    }else{
      this.divAyuda.classList.add('hide')
    }
  }
}



function empezarJuego(){

  var juego = new Juego()
}