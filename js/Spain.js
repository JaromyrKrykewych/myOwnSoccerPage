
const ala = new Club ("Deportivo Alavés")
const alc = new Club ("CD Alcoyano")
const ath = new Club ("Athletic Club")
const atl = new Club ("Atlético Madrid")
const are = new Club ("Arenas Club")
const bar = new Club ("FC Barcelona")
const bet = new Club ("Real Betis")
const cas = new Club ("CD Castellón")
const cdm = new Club ("CD Málaga")
const cel = new Club ("RC Celta Vigo")
const con = new Club ("CD Condal")
const cor = new Club ("Córdoba CF")
const cul = new Club ("Cultural Leonesa")
const dep = new Club ("RC Deportivo La Coruña")
const elc = new Club ("Elche CF")
const esp = new Club ("RCD Espanyol")
const eur = new Club ("CE Europa")
const gim = new Club ("Gimnastic de Tarragona")
const gra = new Club ("Granada CF")
const her = new Club ("Hércules")
const jae = new Club ("Real Jaén")
const lev = new Club ("Levante UD")
const lpa = new Club ("UD Las Palmas")
const mal = new Club ("RCD Mallorca")
const mur = new Club ("Real Murcia CF")
const osa = new Club ("CA Osasuna")
const ovi = new Club ("Real Oviedo")
const pon = new Club ("Pontevedra CF")
const rac = new Club ("Racing Santander")
const rbu = new Club ("Real Burgos CF")
const rma = new Club ("Real Madrid CF")
const rso = new Club ("Real Sociedad")
const run = new Club ("Real Unión Club")
const rva = new Club ("Real Valladolid")
const sab = new Club ("CE Sabadell")
const sev = new Club ("Sevilla FC")
const spo = new Club ("Sporting Gijón")
const ten = new Club ("CD Tenerife")
const tet = new Club ("CA Tetuán")
const val = new Club ("Valencia CF")
const uel = new Club ("UE Lleida")
const zar = new Club ("Real Zaragoza")

 
/*Estas funciones irán en un archivo js propio, acá están para facilitar mientras agrego los datos*/
/*La idea es comenzar a exportar e importar las funciones, 
pero creo que debo buscar un nombre más genérico para estas funciones 
o importarlas directamente desde seasonSpain.js */    
const seasonsOneToTwenty = () => {
    seasonUno()
    seasonDos()
    seasonTres()
    seasonCuatro()
    seasonCinco()
    seasonSeis()
    seasonSiete()
    seasonOcho()
    seasonNueve()
    seasonDiez()
    seasonOnce()
    seasonDoce()
    seasonTrece()
    seasonCatorce()
    seasonQuince()
    seasonDieciseis()
    seasonDiecisiete()
    seasonDieciocho()
    seasonDiecinueve()
    seasonVeinte()
}
const seasonsTwentyOneToForty = () => {
    seasonVeintiuno()
    seasonVeintidos()
    seasonVeintitres()
    seasonVeinticuatro()
    seasonVeinticinco()
    seasonVeintiseis()
    seasonVeintisiete()
    seasonVeintiocho()
    seasonVeintinueve()
    seasonTreinta()
    seasonTreintayUno()
    seasonTreintayDos()
    seasonTreintayTres()
    seasonTreintayCuatro()
    seasonTreintayCinco()
    seasonTreintaySeis()
    seasonTreintaySiete()
    seasonTreintayOcho()
    seasonTreintayNueve()
    seasonCuarenta()
}
const seasonsFortyOneToSixty = () => {
    seasonCuarentayUno()
}

//Las declaraciones quedan acá
seasonsOneToTwenty()
seasonsTwentyOneToForty()
seasonsFortyOneToSixty()


//Creación Tablas

teams.sort( function(a, b) {
    if (a.pts != b.pts){
        return b.pts - a.pts;
    } else if (a.pts === b.pts) {
        return b.dif - a.dif
    } else if (a.pts === b.pts && a.dif === b.dif) {
        return b.goalsFor - a.goalsFor
    }
    
})

let tableBody = document.getElementById('filas')

/**
 * Esta función también la podría llevar a otro archivo js ya que la 
 * he modificado bastante
 */
const createTable = () => {
    
    teams.forEach( (e, index) => {
        let fila = document.createElement('tr')
        let pos = document.createElement('th')
        let club = document.createElement('td')
        let seasons = document.createElement('td')
        let titles = document.createElement('td')
        let games = document.createElement('td')
        let wins = document.createElement('td')
        let draws = document.createElement('td')
        let losses = document.createElement('td')
        let goalsFor = document.createElement('td')
        let goalsAgainst = document.createElement('td');
        let dif = document.createElement('td')
        let pts = document.createElement('td')
    
        pos.innerText = index + 1
        club.innerText = e.name
        seasons.innerText = e.seasons
        titles.innerText = e.titles
        games.innerText = e.games
        wins.innerText = e.wins
        draws.innerText = e.draws
        losses.innerText = e.losses
        goalsFor.innerText = e.goalsFor
        goalsAgainst.innerText = e.goalsAgainst
        dif.innerText = e.goalsFor - e.goalsAgainst
        pts.innerText = e.wins * 3 + e.draws
    
        fila.appendChild(pos)
        fila.appendChild(club)
        fila.appendChild(seasons)
        fila.appendChild(titles)
        fila.appendChild(games)
        fila.appendChild(wins)
        fila.appendChild(draws)
        fila.appendChild(losses)
        fila.appendChild(goalsFor)
        fila.appendChild(goalsAgainst)
        fila.appendChild(dif)
        fila.appendChild(pts)
    
        tableBody.appendChild(fila)

        if (e.laLiga === true) {
            fila.style.backgroundColor = '#fbe000';
            pos.style.backgroundColor = 'rgb(209, 205, 205)';
        } else if (!e.laLiga) {
            fila.style.backgroundColor = 'rgb(209, 205, 205)';
            pos.style.backgroundColor = 'rgb(209, 205, 205)';
        }
    })

    
}

createTable()

//Filtrar en Tabla

const iconSeason = document.querySelector('#sortSeason')
const iconTitle = document.querySelector('#sortTitle')
const iconPts = document.querySelector('#sortPts')

iconSeason.onclick = function() {
    teams.sort( function(a, b) {
        return b.seasons - a.seasons;
    })
    tableBody.innerHTML = ""
    createTable()    
}
iconTitle.onclick = function() {
    teams.sort( function(a, b) {
        return b.titles - a.titles;
    })
    tableBody.innerHTML = ""
    createTable()    
}
iconPts.onclick = function() {
    teams.sort( function(a, b) {
        return b.pts - a.pts;
    })
    tableBody.innerHTML = ""
    createTable()    
}

const verificarTabla = () => {
    let sumaWins = 0;
    let sumaLosses = 0;
    let sumaDif = 0;
    teams.forEach( (team) => {
        sumaWins += team.wins;
        sumaLosses += team.losses;
        sumaDif += team.dif;
        console.log(`${sumaWins}/${sumaLosses}/${sumaDif}`)
    })
    
}
verificarTabla()