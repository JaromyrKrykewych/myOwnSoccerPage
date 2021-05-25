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