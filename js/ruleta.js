class Juego {

  constructor(){
    this.divAyuda = document.getElementById('ayuda')
    this.divPreguntas = document.getElementById('preguntas')
    this.divPuntos = document.getElementById('puntos')
    this.toggleDivAyuda()
    this.toggleDivPreguntas()
    this.toggleDivPuntos()
    this.inicializar()
    this.theWheel.startAnimation()
    this.audio = new Audio("audios/tick.mp3")
    this.preguntas = [
      {
        pregunta: "¿Cobertura básica de póliza Accidentes Personales?",
        img: "img/accidentePersonal.png",
        respuestas: [
          {opcion1: "Maternidad, Enfermería y Cirugia", valor: false, img: "" },
          {opcion2: "Primeros Auxilios", valor: false, img: "" },
          {opcion3: "Incendio, Robo e Inundación", valor: false, img: "" },
          {opcion4: "Urgencias, Medicina preventiva y Urgencias", valor: false, img: "" },
          {opcion5: "Muerte accidental, invalidez total y permanente y gastos médicos", valor: true, img: "" }
        ]
      },{
        pregunta: "¿Qué debemos validar antes de afiliar a un cliente en Accidentes Personales sobre la persona a asegurar?",
        img: "img/validar.png",
        respuestas: [
          {opcion1: "Edad comprendida 18-64 años, sexo y estudios", valor: false, img: "" },
          {opcion2: "Ocupación, estudios y dirección", valor: false, img: "" },
          {opcion3: "Datos personales, contacto", valor: false, img: "" },
          {opcion4: "Experiencia Laboral, Estudios y Edad comprendida 18-64 años", valor: false, img: "" },
          {opcion5: "Edad comprendida 18-64 años, ocupación asegurable, gozar de buena Salud.", valor: true, img: "" }
        ]
      },{
        pregunta: "¿Cual de los siguientes opciones NO es beneficios o ventajas de Accidentes Personales?",
        img: "img/validar.png",
        respuestas: [
          {opcion1: "Cobertura 24h-365 días del año", valor: false, img: "" },
          {opcion2: "Gastos médicos por evento", valor: false, img: "" },
          {opcion3: "No cancela deducible", valor: false, img: "" },
          {opcion4: "Cubre accidentes personales por invalidez total y permanente", valor: false, img: "" },
          {opcion5: "Cubre los gastos de Maternidad.", valor: true, img: "" }
        ]
      },{
        pregunta: "¿Suma de 0 + 1",
        img: "img/validar.png",
        respuestas: [
          {opcion1: "1", valor: true, img: "" },
          {opcion2: "2", valor: false, img: "" },
          {opcion3: "3", valor: false, img: "" },
          {opcion4: "4", valor: false, img: "" },
          {opcion5: "5.", valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 1 + 1",
        img: "img/validar.png",
        respuestas: [
          {opcion1: "1", valor: false, img: "" },
          {opcion2: "2", valor: true, img: "" },
          {opcion3: "3", valor: false, img: "" },
          {opcion4: "4", valor: false, img: "" },
          {opcion5: "5.", valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 2 + 1",
        img: "img/validar.png",
        respuestas: [
          {opcion1: "1", valor: false, img: "" },
          {opcion2: "2", valor: false, img: "" },
          {opcion3: "3", valor: true, img: "" },
          {opcion4: "4", valor: false, img: "" },
          {opcion5: "5.", valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 3 + 1",
        img: "img/validar.png",
        respuestas: [
          {opcion1: "1", valor: false, img: "" },
          {opcion2: "2", valor: false, img: "" },
          {opcion3: "3", valor: false, img: "" },
          {opcion4: "4", valor: true, img: "" },
          {opcion5: "5.", valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 4 + 1",
        img: "img/validar.png",
        respuestas: [
          {opcion1: "1", valor: false, img: "" },
          {opcion2: "2", valor: false, img: "" },
          {opcion3: "3", valor: false, img: "" },
          {opcion4: "4", valor: false, img: "" },
          {opcion5: "5.", valor: true, img: "" }
        ]
      },{
        pregunta: "¿Suma de 5 + 1",
        img: "img/validar.png",
        respuestas: [
          {opcion1: "1", valor: false, img: "" },
          {opcion2: "2", valor: false, img: "" },
          {opcion3: "3", valor: false, img: "" },
          {opcion4: "4", valor: true, img: "" },
          {opcion5: "5.", valor: false, img: "" }
        ]
      },{
        pregunta: "¿Suma de 3 + 1",
        img: "img/validar.png",
        respuestas: [
          {opcion1: "6", valor: true, img: "" },
          {opcion2: "2", valor: false, img: "" },
          {opcion3: "3", valor: false, img: "" },
          {opcion4: "4", valor: true, img: "" },
          {opcion5: "5.", valor: false, img: "" }
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

    let winSegment = juego.theWheel.getIndicatedSegmentNumber()

    //Basic alert of the segment text which is the prize name
    alert(`You have won ${winSegment}`)
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

  generarPreguntasAleatorias(){
    let numPreguntas = juego.preguntas.length

    this.generarSecuencia(numPreguntas)
  }

  generarSecuencia(numPreguntas){
   
   if (!this.cache){
    this.cahe= {}
   }

   if (this.cache[n]){
    return this.cache[n]
   }


  }


}

function empezarJuego(){ 
  window.juego = new Juego()
}