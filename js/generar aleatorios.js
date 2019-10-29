function insertarEn(array,valor,posicion)
{
  console.log(`valor: ${valor}`)
  console.log(`array: ${array} valor:${valor} posicion:${posicion}`)
  var inicio=array.slice(0,posicion)
  console.log(`inicio: ${inicio}`)
  var medio=valor
  console.log(`medio: ${medio}`)
  var fin=array.slice(posicion)
  console.log(`fin: ${fin}`)
  var resultado=inicio.concat(medio).concat(fin)
  console.log(`resultado: ${resultado}`)
  console.log(`----------------`)
  return resultado
}
function aleatoriosNoRepetidos(cantidad)
{
  var array=[]
  for(var i=0;i<cantidad;i++)
  {
    array=insertarEn(array,i,Math.floor(Math.random()*(cantidad+1)) )
  }
  return array
}

console.log(`----------------`)
console.log( aleatoriosNoRepetidos(5)+"" )