// * Esta clase deberia estar contenida en su propio archivo
class Club {
    /**
     * -Usar Object Destructuring para los parametros de una funcion.
     * 
     * Beneficio: permite pasar un objecto como parametro a la funcion,
     * haciendo mas legible el llamado.
     * 
     * Posibles problemas: al no ser obligatorios* los parametros, puede
     * que tome undefined alguno que no este presente en el objeto.
     * 
     * -Revisar Object Destructuring!
     */
    constructor ({
        name = '', games = 0, wins = 0, draws = 0,
        losses, goalsFor, goalsAgainst, dif, pts
    }) {
        /**
         * Al no ser obligatorios deberas asignar un valor por defecto a las
         * propiedades, de igual manera deberia tener un valor predeterminado.
         * Alli esta el ejemplo de como asignar un valor por defecto en caso de que
         * no se encuentre la propiedad.
         */
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

    /**
     * La nota en el constructor aplica aca!
     */
    season = ({g, w, d, l, gf, ga}) => {
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

/**
 * -Es mas factible usar un archivo aparte para crear esta informacion.
 * 
 * -Si esta es solo la inicializacion de los Clubes, es mejor armar
 * un Array de los nombres y crear el objeto dentro de una iteracion.
 * Asi tambien puedes obtener un Array con los objetos en menos lineas.
 * 
 * -Con las modificaciones de arriba, el llamado a esta clase seria:
 *                  new Club({name:'Club a'});
 * Ya que los otros valores tienen asignacion por defecto no es necesario pasar
 * la propiedad para inicializarla en 0.
 */
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

