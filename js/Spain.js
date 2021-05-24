class Club {
    constructor (name, games, wins, draws, losses, goalsFor, goalsAgainst, dif, pts) {
        this.name = name;
        this.games = games;
        this.wins = wins;
        this.draws = draws;
        this.losses = losses;
        this.goalsFor = goalsFor;
        this.goalsAgainst = goalsAgainst;
        this.dif = dif;
        this.pts = pts;
    } 

    season = (g, w, d, l, gf, ga) => {
        this.games = this.games + g;
        this.wins = this.wins + w;
        this.draws = this.draws + d;
        this.losses = this.losses + l;
        this.goalsFor = this.goalsFor + gf;
        this.goalsAgainst = this.goalsAgainst + ga;
        this.dif = this.goalsFor - this.goalsAgainst;
        this.pts = this.wins * 3 + this.draws;
    }
}

const ath = new Club ("Athletic Club", 0, 0, 0, 0, 0, 0, 0, 0)
const atl = new Club ("Atlético Madrid", 0, 0, 0, 0, 0, 0, 0, 0)
const are = new Club ("Arenas Club", 0, 0, 0, 0, 0, 0, 0, 0)
const bar = new Club ("FC Barcelona", 0, 0, 0, 0, 0, 0, 0, 0)
const esp = new Club ("RCD Espanyol", 0, 0, 0, 0, 0, 0, 0, 0)
const eur = new Club ("CE Europa", 0, 0, 0, 0, 0, 0, 0, 0)
const rac = new Club ("Racing Santander", 0, 0, 0, 0, 0, 0, 0, 0)
const rma = new Club ("Real Madrid CF", 0, 0, 0, 0, 0, 0, 0, 0)
const rso = new Club ("Real Sociedad", 0, 0, 0, 0, 0, 0, 0, 0)
const run = new Club ("Real Unión Club", 0, 0, 0, 0, 0, 0, 0, 0)

const teams = [ath, atl, are, bar, esp, eur, rac, rma, rso, run]

const seasonUno = () => {
    //FC Barcelona
    bar.season(18, 11, 3, 4, 37, 23);
    //Real Madrid
    rma.season(18, 11, 1, 6, 40, 27);
    //Athletic Club
    ath.season(18, 8, 4, 6, 43, 33);
    //Real Sociedad
    rso.season(18, 8, 4, 6, 46, 41);
    //Arenas Club
    are.season(18, 8, 3, 7, 32, 39);
    //Atlético Madrid
    atl.season(18, 8, 2, 8, 43, 41);
    //RCD Espanyol
    esp.season(18, 7, 4, 7, 32, 38);
    //CE Europa
    eur.season(18, 6, 4, 8, 45, 49);
    //Real Unión Club
    run.season(18, 5, 2, 11, 40, 42);
    //Racing Santander
    rac.season(18, 3, 3, 12, 25, 50);
}
const seasonDos = () => {
    //Athletic Club
    ath.season(18, 12, 6, 0, 63, 28);
    //FC Barcelona
    bar.season(18, 11, 1, 6, 46, 36);
    //Arenas Club
    are.season(18, 9, 2, 7, 51, 40);
    //RCD Espanyol
    esp.season(18, 9, 2, 7, 40, 33);
    //Real Madrid CF
    rma.season(18, 7, 3, 8, 45, 42);
    //Real Unión Club
    run.season(18, 6, 5, 7, 48, 52);
    //Real Sociedad
    rso.season(18, 5, 4, 9, 34, 37);
    //Racing Santander
    rac.season(18, 7, 0, 11, 32, 58);
    //CE Europa
    eur.season(18, 6, 1, 11, 29, 44);
    //Atlético Madrid
    atl.season(18, 5, 2, 11, 32, 50);
}

seasonUno()
seasonDos()
 
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

