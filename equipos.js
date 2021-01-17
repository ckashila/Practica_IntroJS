// Array con los equipos que participan en el mundial
const equiposMundial = [
	'Andorra', 'Polonia', 'Islandia', 'Noruega', 'Tailandia', 'Catalunya',
	'Japón', 'Irlanda', 'Italia', 'Malta', 'Praga', 'Rusia',
	'Estonia', 'Letonia', 'Lituania', 'Canada', 'Uruguay', 'Francia',
	'Brasil', 'Suiza', 'Suecia', 'Chile', 'Inglaterra', 'México',
	'Alemania', 'Argentina', 'Estados Unidos', 'Corea del Sur', 'Sudáfrica','Catar',
	'Bélgica', 'Países Bajos'
   ]                   

// Cogemos de los equipos que participan en el mundial y para que cada iteración sean equipos distintos escogemos 16 aleatorios.
 const equiposClasificados = equiposMundial.sort(() => Math.random() - 0.5)
 var equiposPlayOffs = equiposClasificados.slice(0, 16)


module.exports = equiposPlayOffs