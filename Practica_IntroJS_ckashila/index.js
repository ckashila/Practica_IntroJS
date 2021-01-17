/*
import { equiposPlayOffs } from './equipos.js'
import { Partido } from './jugarPartido.js'
Por alguna razón que se me escapa los imports no me funcionan. Perdí mucho tiempo intentando arreglarlo y desisti.
*/
const Partido = require ('./jugarPartido.js')
equiposPlayOffs = require ('./equipos.js')

console.log('~~~~ PLAYOFFS ~~~~')
console.log('Paises que pasan a octavos: ')

// Mostramos los 16 equipos que han pasado a los PlayOffs
 equiposPlayOffs.forEach(equipo => {
	 console.log(equipo)
 })


 // Jugamos las eliminatorias
while (equiposPlayOffs.length > 1){
	if (equiposPlayOffs.length == 16)
		console.log("#################### OCTAVOS ####################")
	else if (equiposPlayOffs.length == 8)
		console.log("#################### CUARTOS ####################")
	else if (equiposPlayOffs.length == 4)
		console.log("#################### SEMIFINALES ####################")
	else if (equiposPlayOffs.length == 2)
		console.log("#################### LA GRAN FINAL ####################")

	equiposPlayOffs = pasarSiguienteRonda(equiposPlayOffs)
}

// Mostramos el ganador del Final
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("EL GANADOR DEL MUNDIAL:",equiposPlayOffs[0])
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")



// Función que nos servira para jugar los partidos y pasar los equipos de ronda
function pasarSiguienteRonda(equiposRonda){
	let ganadoresRonda = []
	for (var i = 0; i < equiposRonda.length; i = i+2){
		let partidoRonda = new Partido (equiposRonda[i],equiposRonda[i+1])
		ganadoresRonda.push(partidoRonda.play())
	}
	//console.log(ganadoresRonda)
	return ganadoresRonda
}	