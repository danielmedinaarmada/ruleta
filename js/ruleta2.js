class Juego {

  constructor(){
    this.cantidad = 5
    this.preguntasRealizadas = 0
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
        pregunta: "La póliza de Mercantil Seguros de Accidentes Personales, es una póliza de:",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: 'Familiar', valor: false, img: "" },
          {opcion: 1, texto: 'Colectiva',valor: false, img: "" },
          {opcion: 2, texto: 'Individual',valor: true, img: "" },
          {opcion: 3, texto: 'Corporativa',valor: false, img: "" }
        ]
      },{
        pregunta: "Un Accidente es:",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: 'Algo que hice con intención', valor: false, img: "" },
          {opcion: 1, texto: 'Algo inesperado', valor: true, img: "" },
          {opcion: 2, texto: 'Algo cercano a mi voluntad', valor: false, img: "" },
          {opcion: 3, texto: 'Algo que estaba esperando', valor: false, img: "" },
          {opcion: 4, texto: 'Algo obligado', valor: false, img: "" }
        ]
      },{
        pregunta: "Cual de las siguientes opciones NO es una cobertura de la póliza de accidentes personales",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: 'Hospitalización', valor: true, img: "" },
          {opcion: 1, texto: 'Muerte Accidental', valor: false, img: "" },
          {opcion: 2, texto: 'Maternidad', valor: true, img: "" },
          {opcion: 3, texto: 'Invalidez total y permanente', valor: false, img: "" },
          {opcion: 4, texto: 'Cirugía', valor: true, img: "" },
          {opcion: 5, texto: 'Gastos Médicos', valor: false, img: "" },
          {opcion: 6, texto: 'Cancer', valor: true, img: "" }
        ]
      },{
        pregunta: "Identifique que grupo de edad no permiten la suscripción",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: 'Entre 22 a 44 años', valor: false, img: "" },
          {opcion: 1, texto: 'Entre 01 a 18 años', valor: true, img: "" },
          {opcion: 2, texto: 'Entre 18 a 64 años', valor: false, img: "" },
          {opcion: 3, texto: 'Entre 35 a 55 años', valor: false, img: "" },
          {opcion: 4, texto: 'Entre 65 a 99 años', valor: true, img: "" }
        ]
      },{
        pregunta: "¿Que medio de pago es valido, para el pago de la póliza de AP?",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: 'Tarjeta de Crédito American Express 375987654321001', valor: false, img: "" },
          {opcion: 1, texto: 'Tarjeta de Débito Banco Mercantil 50187820002434521', valor: false, img: "" },
          {opcion: 2, texto: 'Tarjeta de Crédito Banco Mercantil 5412454325242976', valor: true, img: "" },
          {opcion: 3, texto: 'Cuenta de Ahorro Conjunta del Banco Venezuela 01020022625121232342', valor: false, img: "" },
          {opcion: 4, texto: 'Cuenta de Ahorro Banco de Venezueka 01021234321212346543', valor: true, img: "" },
          {opcion: 5, texto: 'Tarjeta Súper Efectiva del BNC ', valor: false, img: "" },
          {opcion: 6, texto: 'Cédula del Buen Vivir', valor: false, img: "" }
        ]
      },{
        pregunta: "Cual de los siguientes eventos es excluido de la póliza de Accidentes Personales de Mercantil Seguros",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: 'Me cai bajando las escaleras', valor: false, img: "" },
          {opcion: 1, texto: 'Me caí en una fiesta por estar borracho', valor: true, img: "" },
          {opcion: 2, texto: 'Me caí saliendo del baño', valor: false, img: "" },
          {opcion: 3, texto: 'Me queme el brazo cocinando', valor: false, img: "" },
          {opcion: 4, texto: 'Me caí entrando al automercado', valor: false, img: "" }
        ]
      },{
        pregunta: "Que profesiones son candidatas para afiliar en Accidentes Personales de Mercantil Seguros",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: 'Policías', valor: false, img: "" },
          {opcion: 1, texto: 'Maestro', valor: true, img: "" },
          {opcion: 2, texto: 'Bomberos', valor: false, img: "" },
          {opcion: 3, texto: 'Militares', valor: false, img: "" },
          {opcion: 4, texto: 'Deportistas extremos', valor: false, img: "" },
          {opcion: 5, texto: 'Personas con discapacidad', valor: false, img: "" },
          {opcion: 6, texto: 'Diabetes', valor: false, img: "" },
          {opcion: 7, texto: 'Enfermedades terminales', valor: false, img: "" },
          {opcion: 8, texto: 'Piloto de Avion', valor: false, img: "" },
          {opcion: 9, texto: 'Ingeniero', valor: true, img: "" },

        ]
      },{
        pregunta: "Cual de las siguientes opciones SI es una cobertura de la póliza de accidentes personales",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: 'Hospitalización', valor: false, img: "" },
          {opcion: 1, texto: 'Muerte Accidental', valor: true, img: "" },
          {opcion: 2, texto: 'Maternidad', valor: false, img: "" },
          {opcion: 3, texto: 'Invalidez total y permanente', valor: true, img: "" },
          {opcion: 4, texto: 'Cirugía', valor: false, img: "" },
          {opcion: 5, texto: 'Gastos Médicos', valor: true, img: "" },
          {opcion: 6, texto: 'Cancer', valor: false, img: "" }
        ]
      },{
        pregunta: "En una póliza de Accidentes Personales el Tomador puede ser Asegurado",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: 'Sí', valor: true, img: "" },
          {opcion: 1, texto: 'No', valor: false, img: "" }
        ]
      },{
        pregunta: "En el medio de pago que debo validar",
        img: "img/validar.png",
        respuestas: [
          {opcion: 0, texto: 'Que no lo tenga', valor: false, img: "" },
          {opcion: 1, texto: 'Que este activo, tenga saldo y sea el titular', valor: true, img: "" },
          {opcion: 2, texto: 'Que no lo use', valor: false, img: "" },
          {opcion: 3, texto: 'Que este suspendido', valor: false, img: "" }
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

  generarArrayAleatorio(array){
    return array.sort(() => (Math.random() - 0.5))
  }
  
  generarArrayPreguntas(){
    this.arrayPreguntas = this.generarArrayAleatorio(this.preguntas)
  }

  // This function called after the spin animation has stopped
  winPrize(){
    // call getIndicatedSegment() function to return pointer to the segment pointed to on wheel
    juego.winSegment = juego.theWheel.getIndicatedSegmentNumber()
    juego.siguientePregunta()
  }


  saludoPregunta(){
    //Basic alert of the segment text which is the prize name
    Swal.fire({
      title: `${this.preguntasRealizadas+1}${this.numerosOrdinales(this.preguntasRealizadas+1)} Pregunta.\nDemuestra tus conocimientos.\n ${juego.theWheel.segments[juego.winSegment].text}`,
      showConfirmButton: false,
      imageUrl: 'img/conocimiento.png',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Custom image',
      position: 'center',
      timer: 3000,
    })
  }

  numerosOrdinales(numero){
    switch(numero){
      case 1:
        return "ra"
        break
      case 2:
        return "da"
        break
      case 3:
        return "ra"
        break
      case 4:
        return "ta"
        break
      case 5:
        return "ta"
        break  
      case 6:
        return "ta"
        break
      case 7:
        return "ma"
        break
      case 8:
        return "va"
        break
      case 9:
        return "na"
        break
      case 10:
        return "ma"
        break
    }
  }

  saludoGanaste(){
    //Basic alert of the segment text which is the prize name
    Swal.fire({
      title: `Felicitaciones.\nAlcanzaste una efectividad: ${((juego.puntosPositivos/this.preguntasRealizadas )*100).toFixed(2)}%.\nDeseas iniciar una nueva practica.`,
      showConfirmButton: true,
      showCancelButton: true,
      imageUrl: 'img/ganaste.png',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Custom image',
      position: 'center',
    }).then((result) => {
        if (result.value) {
          empezarJuego()
          this.iniciarTotales()
          this.toggleDivAyuda()
          this.toggleDivPreguntas()
          this.toggleDivPuntos()
       }
    })
  }

  saludoPerdiste(){
    //Basic alert of the segment text which is the prize name
    Swal.fire({
      title: `Debes repasar la documentación del producto y hacer nuevamente la practica. No te desmotives, hiciste lo mas difícil, estas aquí.\nAlcanzaste una efectividad de: ${((juego.puntosPositivos/this.preguntasRealizadas)*100).toFixed(2)}%.\nDeseas iniciar una nueva practica.`,
      showConfirmButton: true,
      showCancelButton: true,
      imageUrl: 'img/perdiste.png',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Custom image',
      position: 'center',
    }).then((result) => {
        if (result.value) {
          empezarJuego()
          this.iniciarTotales()
          this.toggleDivAyuda()
          this.toggleDivPreguntas()
          this.toggleDivPuntos()          
       }
    })
  }


  siguientePregunta(){
    juego.saludoPregunta()
    //Pregunta
    juego.toggleDivPreguntas()
    const posicion = juego.winSegment-1
    const pregunta = document.createElement("p");
    let att = document.createAttribute("class")          // Create a "class" attribute
    att.value = 'pregunta'                               // Set the value of the class attribute
    pregunta.setAttributeNode(att)

    att = document.createAttribute("id") 
    att.value = `pregunta${posicion}`
    pregunta.setAttributeNode(att)
                           // Set the value of the class attribute
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
            console.log('Gano')
            console.log(juego.arrayPreguntasinicio)
            //quitar el listener
            juego.removeListener()
            //contar puntos positivos
            juego.positivo()
            //validar preguntas
            if (juego.puntosPositivos < 5) {
             //Ocultar Preguntas
              juego.toggleDivPreguntas()
              //animation
              juego.animacion() //Aqu se hace la siguiente pregunta
              //girar la rueda
            }else {
              juego.saludoGanaste()
            }
          }else {
            //Se acabo el jueego acumulaste 5 puntos positivos. deseas volver a jugar
          }

        } else {
          if (juego.puntosNegativos < juego.rondas){
            //Perdiste
            //sumar una parte de na rueda y una pregunta en el array
            juego.addSegment(juego.puntosNegativos)
            //Anadir una pregunta en el Array
            juego.arrayPreguntasinicio.push(juego.arrayPreguntas[juego.cantidad + juego.puntosNegativos])
            console.log('Perdio')
            console.log(juego.arrayPreguntasinicio)
            //quitar el listener
            juego.removeListener()
             //contar puntos positivos
            juego.negativo()
            //validar preguntas
            if (juego.puntosNegativos < 5) {
             //Ocultar Preguntas
              juego.toggleDivPreguntas()
              //animation
              juego.animacion() //Aqu se hace la siguiente pregunta
              //girar la rueda
            }else {
              juego.saludoPerdiste()
            }
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
    setTimeout(()=>{
      ctotal.classList.remove('cTotal')
    },3000)
  }

  negativo(){
    juego.preguntasRealizadas++
    juego.puntosNegativos++
    let itotal = document.getElementById('iTotal')
    itotal.innerHTML = juego.puntosNegativos
    let att = document.createAttribute("class")          // Create a "class" attribute
    att.value = 'iTotal'                    // Set the value of the class attribute
    itotal.setAttributeNode(att)
    setTimeout(()=>{
      itotal.classList.remove('iTotal')
    },3000)
  }

  animacion(){
    juego.theWheel.stopAnimation(false)
    juego.theWheel.rotationAngle=0
    juego.theWheel.draw()
    juego.theWheel.drawImage
    juego.theWheel.startAnimation()
  }

  addSegment(colorPosicion){
    let color = ['#D8F781', '#81F7F3', '#FF0000', '#64FE2E', '#0174DF' ]
    juego.theWheel.addSegment({
      'text': `Pregunta ${this.cantidad + juego.puntosNegativos + 1}`,
      'fillStyle' : color[colorPosicion]
    });
    juego.theWheel.draw()
    juego.theWheel.drawImage
  }

  deleteSegment(){
    juego.theWheel.deleteSegment(juego.winSegment)
    juego.theWheel.draw()
  }


  iniciarTotales(){
    let cTotal = document.getElementById("cTotal");
    let iTotal = document.getElementById("iTotal");

    cTotal.innerHTML = "0"
    iTotal.innerHTML = "0"

  }

  removeListener(){
    const pregunta = document.getElementById("h3");

    // As long as <ul> has a child node, remove it
    while (pregunta.hasChildNodes()) {  
      console.log(pregunta)
      pregunta.removeChild(pregunta.firstChild);
    } 

    const respuestas = document.getElementById("respuestas");

    // As long as <ul> has a child node, remove it
    while (respuestas.hasChildNodes()) {  
      console.log(respuestas)
      respuestas.removeChild(respuestas.firstChild);
    } 


/*    for (let i=0; i < juego.respuestas.length; i++){
      let respuesta = document.getElementById(`opcion${i}`)
      respuesta.parentNode.removeChild(respuesta)
      //respuesta.removeEventListener('click', this.respuesta)
    }*/
  }



}

function empezarJuego(){ 
  window.juego = new Juego()
}