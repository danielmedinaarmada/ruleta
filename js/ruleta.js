class Juego {

  constructor(){
    this.cantidad = 5
    this.divAyuda = document.getElementById('ayuda')
    this.divPreguntas = document.getElementById('preguntas')
    this.divPuntos = document.getElementById('puntos')
    this.toggleDivAyuda()
    this.toggleDivPuntos()
    this.inicializar()
    this.theWheel.startAnimation()
    this.audio = new Audio("audios/tick.mp3")
    this.preguntas = [
      {
        pregunta: "¿Suma de 0 + 1?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 6, valor: false, img: "" },
          {opcion: 2, valor: false, img: "" },
          {opcion: 1, valor: true, img: "" },
          {opcion: 4, valor: false, img: "" },
          {opcion: 5, valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 2?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 1, valor: false, img: "" },
          {opcion: 2, valor: true, img: "" },
          {opcion: 3, valor: false, img: "" },
          {opcion: 4, valor: false, img: "" },
          {opcion: 5, valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 3?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 1, valor: false, img: "" },
          {opcion: 2, valor: false, img: "" },
          {opcion: 3, valor: true, img: "" },
          {opcion: 4, valor: false, img: "" },
          {opcion: 5, valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 4?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 1, valor: false, img: "" },
          {opcion: 2, valor: false, img: "" },
          {opcion: 3, valor: false, img: "" },
          {opcion: 4, valor: true, img: "" },
          {opcion: 5, valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 5?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 1, valor: false, img: "" },
          {opcion: 2, valor: false, img: "" },
          {opcion: 3, valor: false, img: "" },
          {opcion: 4, valor: false, img: "" },
          {opcion: 5, valor: true, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 6?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 6, valor: true, img: "" },
          {opcion: 2, valor: false, img: "" },
          {opcion: 3, valor: false, img: "" },
          {opcion: 4, valor: false, img: "" },
          {opcion: 5, valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 7?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 1, valor: false, img: "" },
          {opcion: 7, valor: true, img: "" },
          {opcion: 3, valor: false, img: "" },
          {opcion: 4, valor: false, img: "" },
          {opcion: 5, valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 8?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 1, valor: false, img: "" },
          {opcion: 2, valor: false, img: "" },
          {opcion: 8, valor: true, img: "" },
          {opcion: 4, valor: false, img: "" },
          {opcion: 5, valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 9?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 1, valor: false, img: "" },
          {opcion: 2, valor: false, img: "" },
          {opcion: 3, valor: false, img: "" },
          {opcion: 9, valor: true, img: "" },
          {opcion: 5, valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 10?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 1, valor: false, img: "" },
          {opcion: 2, valor: false, img: "" },
          {opcion: 3, valor: false, img: "" },
          {opcion: 4, valor: false, img: "" },
          {opcion: 10, valor: true, img: "" }
        ]
      }
    ]
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
        'spins'         :  8,
        // To do something after the animation has finished specify callback function
        'callbackFinished' : this.winPrize,
        //During  the animation need  to call function to re-draw triangle
        'callbackAfter' : this.drawImage,
        'callbackSound' : this.playSound,
        'soundTriggers' : 'pin'
      },
      'pins' : {
        'number' : 15
      },
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

  // This function called after the spin animation has stopped
  winPrize(){
    // call getIndicatedSegment() function to return pointer to the segment pointed to on wheel
    juego.winSegment = juego.theWheel.getIndicatedSegmentNumber()

    //Basic alert of the segment text which is the prize name
    alert(`You have won ${juego.winSegment}`)
    juego.toggleDivPreguntas()
    juego.generarArrayPreguntas()
    juego.iniciarPreguntas()
  }

  drawImage(){
    //alert('prueba')
    let canvas = document.getElementById('WinWheel')
    let ctx = canvas.getContext('2d')

    let img = new Image()
    img.src = 'img/basic_pointer.png'
    ctx.drawImage(img, 230, 10)       //Draw the iimage at the specified x and y
  }

  playSound(){
    juego.audio.pause()
    juego.audio.currentTime = 0
    juego.audio.play()
  }

  generarArrayPreguntas(){
    juego.numPreguntas = juego.preguntas.length
    juego.arrayPreguntas = []
    for (let i=0; i < juego.numPreguntas; i++){
      juego.arrayPreguntas.push(i)
    }
    juego.arrayPreguntas = juego.generarArrayAleatorio(juego.arrayPreguntas)
    console.log(juego.arrayPreguntas)
  }

  generarArrayAleatorio(array){
    return array.sort( () => (Math.random() - 0.5))
  }

  iniciarPreguntas(){
    console.log(juego.cantidad)
    juego.arrayPreguntasinicio = juego.arrayPreguntas.slice(0, juego.cantidad) 
    console.log(juego.arrayPreguntasinicio)
    let posicion = juego.winSegment
    console.log(posicion)
    juego.imprimerPregunta(posicion)    
    juego.imprimirRespuestas(posicion)
  }

  imprimerPregunta(posicion){
    let pregunta = document.createElement("p");
    pregunta.innerHTML = juego.preguntas[posicion].pregunta
    document.getElementById('h3').appendChild(pregunta)
  }

  imprimirRespuestas(posicion){
    let respuestas = juego.generarArrayAleatorio(juego.preguntas[posicion].respuestas)

    for (let i=0; i < respuestas.length; i++){
      let respuesta = document.createElement("button")     // Get the first <h1> element in the document
      let att = document.createAttribute("class")          // Create a "class" attribute
      att.value = 'boton_personalizado'                // Set the value of the class attribute
      respuesta.innerHTML = respuestas[i].opcion           // Add the class attribute to <h1>
      respuesta.setAttributeNode(att)                                  
      document.getElementById('respuestas').appendChild(respuesta)
    }

  }

}

function empezarJuego(){ 
  window.juego = new Juego()
}