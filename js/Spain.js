
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
const dep = new Club ("RC Deportivo La Coruña")
const esp = new Club ("RCD Espanyol")
const eur = new Club ("CE Europa")
const gim = new Club ("Gimnastic de Tarragona")
const gra = new Club ("Granada CF")
const her = new Club ("Hércules")
const jae = new Club ("Real Jaén")
const lpa = new Club ("UD Las Palmas")
const mur = new Club ("Real Murcia CF")
const osa = new Club ("CA Osasuna")
const ovi = new Club ("Real Oviedo")
const rac = new Club ("Racing Santander")
const rma = new Club ("Real Madrid CF")
const rso = new Club ("Real Sociedad")
const run = new Club ("Real Unión Club")
const rva = new Club ("Real Valladolid")
const sab = new Club ("CE Sabadell")
const sev = new Club ("Sevilla FC")
const spo = new Club ("Sporting Gijón")
const tet = new Club ("CA Tetuán")
const val = new Club ("Valencia CF")
const uel = new Club ("UE Lleida")
const zar = new Club ("Real Zaragoza")

const teams = [
    ala, alc, ath, atl, are, bar, bet, cas, cdm, cel, dep, esp, 
    eur, gim, gra, her, jae, lpa, mur, osa, ovi, rac, rma, rso, run, 
    rva, sab, sev, spo, tet, val, uel, zar
    ]

/*Estas funciones irán en un archivo js propio*/    
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
}

//Las declaraciones quedan acá
seasonsOneToTwenty()
seasonsTwentyOneToForty()


//Creación Tablas
teams.sort( function(a, b) {
    return b.pts - a.pts;
})

let tableBody = document.getElementById('filas')

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
            pos.style.backgroundColor = 'white';
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

