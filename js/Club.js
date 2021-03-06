const teams = [];

class Club {

    name;
    laLiga;
    seasons;
    titles;
    games;
    wins;
    draws;
    losses;
    goalsFor;
    goalsAgainst;
    dif;
    pts;

    constructor (name='', laLiga=true, seasons=0, titles=0, games=0, wins=0, draws=0, losses=0, goalsFor=0, goalsAgainst=0, dif=0, pts=0) {
        this.name = name;
        this.laLiga = laLiga;
        this.seasons = seasons;
        this.titles = titles;
        this.games = games;
        this.wins = wins;
        this.draws = draws;
        this.losses = losses;
        this.goalsFor = goalsFor;
        this.goalsAgainst = goalsAgainst;
        this.dif = dif;
        this.pts = pts;
        
        teams.push(this)
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
        this.seasons = this.seasons + 1;
    }

    winner = () => {
        this.titles = this.titles + 1
    }

    ascenso = () => {
        this.laLiga = true
    }

    descenso = () => {
        this.laLiga = false
    }
}


