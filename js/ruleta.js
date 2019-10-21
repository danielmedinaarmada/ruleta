class Juego {

  constructor(){
    this.divAyuda = document.getElementById('ayuda')
    this.divPreguntas = document.getElementById('preguntas')
    this.divPuntos = document.getElementById('puntos')
    this.inicializar()
    this.toggleDivAyuda()
    this.toggleDivPreguntas()
    this.toggleDivPuntos()
    this.girar()
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
      'animation': {
        'type'          : 'spinToStop',
        'duration'      :  5,
        'spins'         :  5
      },
      'pins' : {
        'number' : 15
      },
        // To do something after the animation has finished specify callback function
        'callbackFinished' : this.winAnimation(),
        //During  the animation need  to call function to re-draw triangle
        'callbackAfter' : this.drawImage()
    })
  }
  

  toggleDivAyuda(){
    if(this.divAyuda.classList.contains('hide')){
      this.divAyuda.classList.remove('hide')
    }else{
      this.divAyuda.classList.add('hide')
    }
  }

  toggleDivPreguntas(){
    if(this.divPreguntas.classList.contains('hide')){
      this.divPreguntas.classList.remove('hide')
    }else{
      this.divPreguntas.classList.add('hide')
    }
  }

  toggleDivPuntos(){
    if(this.divPuntos.classList.contains('hide')){
      this.divPuntos.classList.remove('hide')
    }else{
      this.divPuntos.classList.add('hide')
    }
  }

  girar(){
    this.drawImage()
    this.theWheel.startAnimation()
  }

  // This function called after the spin animation has stopped
  winAnimation(){
    this.drawImage()  
  }

  drawImage(){

    let canvas = document.getElementById('WinWheel')
    let ctx = canvas.getContext('2d')

    let img = new Image()
    img.src = 'img/basic_pointer.png'
    
    img.onload = function(){
      if (ctx){
        ctx.drawImage(img, 100, 10)       //Draw the iimage at the specified x and y
      }
    }

    

  }

}



function empezarJuego(){ 
  window.juego = new Juego()
}