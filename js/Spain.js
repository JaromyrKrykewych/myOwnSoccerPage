
const ala = new Club ("Deportivo Alavés", 0, 0, 0, 0, 0, 0, 0, 0)
const ath = new Club ("Athletic Club", 0, 0, 0, 0, 0, 0, 0, 0)
const atl = new Club ("Atlético Madrid", 0, 0, 0, 0, 0, 0, 0, 0)
const are = new Club ("Arenas Club", 0, 0, 0, 0, 0, 0, 0, 0)
const bar = new Club ("FC Barcelona", 0, 0, 0, 0, 0, 0, 0, 0)
const bet = new Club ("Real Betis", 0, 0, 0, 0, 0, 0, 0, 0)
const esp = new Club ("RCD Espanyol", 0, 0, 0, 0, 0, 0, 0, 0)
const eur = new Club ("CE Europa", 0, 0, 0, 0, 0, 0, 0, 0)
const rac = new Club ("Racing Santander", 0, 0, 0, 0, 0, 0, 0, 0)
const rma = new Club ("Real Madrid CF", 0, 0, 0, 0, 0, 0, 0, 0)
const rso = new Club ("Real Sociedad", 0, 0, 0, 0, 0, 0, 0, 0)
const run = new Club ("Real Unión Club", 0, 0, 0, 0, 0, 0, 0, 0)
const val = new Club ("Valencia CF", 0, 0, 0, 0, 0, 0, 0, 0)

const teams = [ala, ath, atl, are, bar, bet, esp, eur, rac, rma, rso, run, val]

seasonUno()
seasonDos()
seasonTres()
seasonCuatro()
seasonCinco()

teams.sort( function(a, b) {
    return b.pts - a.pts;
})

let tableBody = document.getElementById('filas')

teams.forEach( (e, index) => {
    let fila = document.createElement('tr')
    let pos = document.createElement('th')
    let club = document.createElement('td')
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

