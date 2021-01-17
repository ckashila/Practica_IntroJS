class Partido {
	constructor(localTeam, awayTeam) {
		this.localTeam = localTeam
        this.awayTeam = awayTeam
    }
// Función creada para generar goles aleatoriamente y asignar esos goles al equipo local/visitante y mostrarlo por pantalla
	play() {
		this.goals = {
			goalsHomeTeam: Math.floor(Math.random() * (10 - 1) + 1),
			goalsAwayTeam: Math.floor(Math.random() * (10 - 1) + 1)
        }

        console.log(this.localTeam,':',this.goals.goalsHomeTeam,this.awayTeam,':',this.goals.goalsAwayTeam)
        return this.matchWinner()            
		}    

// Función creada para determinar el ganador de cada partido. Y una forma chapucera(casera?) de resolver en caso de empate
    matchWinner(){
        if (this.goals.goalsHomeTeam > this.goals.goalsAwayTeam ){
            // console.log('Winner:',this.localTeam)
            return this.localTeam
        }else if (this.goals.goalsAwayTeam > this.goals.goalsHomeTeam ){
            // console.log('Winner:',this.awayTeam)
            return this.awayTeam
        }else{
            console.log('>> PENALTIS para desempatar')
            return this.play()
        }
    }

}

module.exports = Partido