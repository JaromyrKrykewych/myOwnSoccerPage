
const ala = new Club ("Deportivo Alavés")
const ath = new Club ("Athletic Club")
const atl = new Club ("Atlético Madrid")
const are = new Club ("Arenas Club")
const bar = new Club ("FC Barcelona")
const bet = new Club ("Real Betis")
const cel = new Club ("RC Celta Vigo")
const esp = new Club ("RCD Espanyol")
const eur = new Club ("CE Europa")
const her = new Club ("Hércules")
const mur = new Club ("Real Murcia CF")
const osa = new Club ("CA Osasuna")
const ovi = new Club ("Real Oviedo")
const rac = new Club ("Racing Santander")
const rma = new Club ("Real Madrid CF")
const rso = new Club ("Real Sociedad")
const run = new Club ("Real Unión Club")
const sev = new Club ("Sevilla FC")
const val = new Club ("Valencia CF")
const zar = new Club ("Real Zaragoza")

const teams = [ala, ath, atl, are, bar, bet, cel, esp, eur, her, mur, osa, ovi, rac, rma, rso, run, sev, val, zar]


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

teams.sort( function(a, b) {
    return b.pts - a.pts;
})

let tableBody = document.getElementById('filas')

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
})

