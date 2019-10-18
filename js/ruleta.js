
let theWheel = new Winwheel({
  'canvasId'    : 'WinWheel',
  'outerRadius' : 200,
  'numSegments' : 5,
  'segments'    :[
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
    'type'          : 'spinToStop',
    'duration'      : 5,
    'spins'         : 5
    //'callbackSound' : playSound,
  }
});

/*
let handImagen = new Image()

handImagen.onload = function(){
  let canvas = document.getElementById('WinWheel')
  let ctx = canvas.getContext('2d')

  if (ctx){
    ctx.save()
    ctx.translate(200, 150);
    ctx.rotate(theWheel.degToRad(-5))
    ctx.translate(-200, -150)
    ctx.drawImage(handImagen, 200, 15)
    ctx.restore()
  }
};

handImagen.src = "../img/basic_pointer.png"

let audio = new Audio("../audios/tick.mp3");

function playSound(){
  audio.pause()
  audio.currentTime = 0
  audio.play()
}
*/
