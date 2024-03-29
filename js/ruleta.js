class Juego {

  constructor(){
    this.cantidad = 5
    this.preguntasRealizadas = 1
    this.puntosPositivos =  0
    this.puntosNegativos =  0
    this.rondas = 5
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
          {opcion: 0, texto: '6', valor: false, img: "" },
          {opcion: 1, texto: '2',valor: false, img: "" },
          {opcion: 2, texto: '1',valor: true, img: "" },
          {opcion: 3, texto: '4',valor: false, img: "" },
          {opcion: 4, texto: '5',valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 2?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: '1', valor: false, img: "" },
          {opcion: 1, texto: '2', valor: true, img: "" },
          {opcion: 2, texto: '3', valor: false, img: "" },
          {opcion: 3, texto: '4', valor: false, img: "" },
          {opcion: 4, texto: '5', valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 3?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: '4', valor: false, img: "" },
          {opcion: 1, texto: '2', valor: false, img: "" },
          {opcion: 2, texto: '3', valor: true, img: "" },
          {opcion: 3, texto: '1', valor: false, img: "" },
          {opcion: 4, texto: '5', valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 4?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: '1', valor: false, img: "" },
          {opcion: 1, texto: '2', valor: false, img: "" },
          {opcion: 2, texto: '3', valor: false, img: "" },
          {opcion: 3, texto: '4', valor: true, img: "" },
          {opcion: 4, texto: '5', valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 5?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: '1', valor: false, img: "" },
          {opcion: 1, texto: '4', valor: false, img: "" },
          {opcion: 2, texto: '3', valor: false, img: "" },
          {opcion: 3, texto: '2', valor: false, img: "" },
          {opcion: 4, texto: '5', valor: true, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 6?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: '6', valor: true, img: "" },
          {opcion: 1, texto: '2', valor: false, img: "" },
          {opcion: 2, texto: '3', valor: false, img: "" },
          {opcion: 3, texto: '4', valor: false, img: "" },
          {opcion: 4, texto: '5', valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 7?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: '1', valor: false, img: "" },
          {opcion: 1, texto: '7', valor: true, img: "" },
          {opcion: 2, texto: '3', valor: false, img: "" },
          {opcion: 3, texto: '4', valor: false, img: "" },
          {opcion: 4, texto: '5', valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 8?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: '1', valor: false, img: "" },
          {opcion: 1, texto: '2', valor: false, img: "" },
          {opcion: 2, texto: '8', valor: true, img: "" },
          {opcion: 3, texto: '4', valor: false, img: "" },
          {opcion: 4, texto: '5', valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 9?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: '1', valor: false, img: "" },
          {opcion: 1, texto: '2', valor: false, img: "" },
          {opcion: 2, texto: '3', valor: false, img: "" },
          {opcion: 3, texto: '9', valor: true, img: "" },
          {opcion: 4, texto: '5', valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 10?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: '1', valor: false, img: "" },
          {opcion: 1, texto: '8', valor: false, img: "" },
          {opcion: 2, texto: '9', valor: false, img: "" },
          {opcion: 3, texto: '5', valor: false, img: "" },
          {opcion: 4, texto: '10', valor: true, img: "" }
        ]
      }
    ]
    this.generarArrayPreguntas()
    this.arrayPreguntasinicio = this.arrayPreguntas.slice(0, this.cantidad) 
  }



  inicializar(){
    this.theWheel = new Winwheel({
      'canvasId'      : 'WinWheel',
      'numSegments'   : 5,
      'outerRadius'   : 200,
      'responsive'   : true,  // This wheel is responsive!
      'segments'      : [
        { 'fillStyle' : '#FFFF00', 'text' : 'Pregunta' },
        { 'fillStyle' : '#6600FF', 'text' : 'Pregunta' },
        { 'fillStyle' : '#FF6600', 'text' : 'Pregunta' },
        { 'fillStyle' : '#66CC00', 'text' : 'Pregunta' },
        { 'fillStyle' : '#CC3300', 'text' : 'Pregunta' }
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

  // This function called after the spin animation has stopped
  winPrize(){
    // call getIndicatedSegment() function to return pointer to the segment pointed to on wheel
    juego.winSegment = juego.theWheel.getIndicatedSegmentNumber()
    juego.saludoPregunta()
    juego.iniciarPreguntas()
  }

  generarArrayAleatorio(array){
    return array.sort(() => (Math.random() - 0.5))
  }
  
  generarArrayPreguntas(){
    this.arrayPreguntas = this.generarArrayAleatorio(this.preguntas)
  }

  saludoPregunta(){
    //Basic alert of the segment text which is the prize name
    Swal.fire({
      title: `Demuestra tus conocimientos. Pregunta número: ${this.preguntasRealizadas}`,
      showConfirmButton: false,
      imageUrl: 'img/conocimiento.png',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Custom image',
      position: 'center',
      timer: 3000,
    })
  }

  iniciarPreguntas(){
    //console.log(juego.cantidad)
    juego.toggleDivPreguntas()
    juego.imprimirPreguntaOpciones()    //La rueda comienza sus pedazos con 1
  }

  imprimirPreguntaOpciones(){
    //Pregunta
    const posicion = juego.winSegment-1
    let pregunta = document.createElement("p");
    let att = document.createAttribute("class")          // Create a "class" attribute
    att.value = 'pregunta'                               // Set the value of the class attribute
    pregunta.setAttributeNode(att)                       // Set the value of the class attribute
    pregunta.innerHTML = this.arrayPreguntasinicio[posicion].pregunta
    document.getElementById('h3').appendChild(pregunta)
    
    //Opciones de Respuestas
    juego.respuestas = juego.generarArrayAleatorio(this.arrayPreguntasinicio[posicion].respuestas)
    for (let i=0; i < juego.respuestas.length; i++){
      const respuesta = document.createElement("button")     // Get the first <h1> element in the document
      let att = document.createAttribute("class")          // Create a "class" attribute
      att.value = 'boton_personalizado'                    // Set the value of the class attribute
      respuesta.setAttributeNode(att)

      att = document.createAttribute("data-respuesta") 
      att.value = i
      respuesta.setAttributeNode(att)

      att = document.createAttribute("id") 
      att.value = `opcion${i}`
      respuesta.setAttributeNode(att)

      respuesta.innerHTML = juego.respuestas[i].texto           
      document.getElementById('respuestas').appendChild(respuesta)
      respuesta.addEventListener('click', this.respuesta)
    }
  }

  respuesta(ev){
    let posicion = juego.winSegment - 1
    let inicio = 0
    let fin = 0
    const RES = ev.target.dataset.respuesta
    const TEXT = juego.respuestas[RES].texto
    Swal.fire({
      title: 'Su respuesta es:?',
      text: TEXT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí'
    }).then((result) => {
      if (result.value) {
        // Continuar con las validaciones
        const resultado = juego.respuestas[RES].valor
        if (resultado){
          if (juego.puntosPositivos < juego.rondas){
            //Ganaste
            //quitar la pregunta que adivino en la rueda
            juego.deleteSegment()
            // quitar pregunta del array
            juego.preguntaRemoved = juego.arrayPreguntasinicio.splice(posicion, 1)
            //quitar el listener
            juego.removeListener()
            //contar puntos positivos
            juego.positivo()
            //llamar a la siguiente pregunta
            juego.siguientePregunta()
            //girar la rueda
          }else {
            //Se acabo el jueego acumulaste 5 puntos positivos. deseas volver a jugar
          }

        } else {
          if (juego.puntosNegativos < juego.rondas){
            //Perdiste
            //sumar una parte de na rueda y una pregunta en el array
            //this.addSegment(posicion)
            //this.cantidad = this.cantidad + 1
            //juego.arrayPreguntasinicio.push(juego.preguntas[this.cantidad])

            //contar puntos negativos
            //quitar el listener
            //girar la rueda
            //llamar a la siguiente pregunta
          } else {
            // Perdiste acumulaste 5 puntos negativos
          }
        }
      }
    })
   
  }

  positivo(){
    juego.preguntasRealizadas++
    juego.puntosPositivos++
    let ctotal = document.getElementById('cTotal')
    ctotal.innerHTML = juego.puntosPositivos
    let att = document.createAttribute("class")          // Create a "class" attribute
    att.value = 'cTotal'                    // Set the value of the class attribute
    ctotal.setAttributeNode(att)
  }

  negativos(){
    juego.preguntasRealizadas++
    juego.puntosNegativos++
    let itotal = document.getElementById('iTotal')
    itotal.innerHTML = juego.puntosNegativos
    let att = document.createAttribute("class")          // Create a "class" attribute
    att.value = 'iTotal'                    // Set the value of the class attribute
    itotal.setAttributeNode(att)
  }


  siguientePregunta(){
    juego.theWheel.stopAnimation(false)
    juego.theWheel.rotationAngle=0
    juego.theWheel.draw()
    juego.theWheel.drawImage
    juego.theWheel.startAnimation()
    juego.siguienteRespuesta()
  }

  siguienteRespuesta(){
    juego.winSegment = juego.theWheel.getIndicatedSegmentNumber()
    juego.imprimirPreguntaOpciones()
  }



  addSegment(colorPosicion){
    let color = ['#D8F781', '#81F7F3', '#FF0000', '#64FE2E', '#0174DF' ]
    juego.theWheel.addSegment({
      'text': '',
      'fillStyle' : color[colorPosicion]
    });
    juego.theWheel.draw()
  }

  deleteSegment(){
    juego.theWheel.deleteSegment(juego.winSegment)
    juego.theWheel.draw()
  }


  removeListener(clickCount){
    for (let i=0; i < juego.respuestas.length; i++){
      const respuesta = document.getElementById(`opcion${i}`)
      respuesta.parentNode.removeChild(respuesta)
      //respuesta.removeEventListener('click', this.respuesta)
    }
  }



}

function empezarJuego(){ 
  window.juego = new Juego()
}