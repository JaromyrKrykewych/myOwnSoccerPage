/**
 * Las temporadas las trabajo por separado y no con alguna clase porque cada una
 * es distinta y a su vez luego quiero aplicar varios eventos sacandoles información
 */

const seasonUno = () => {
    //FC Barcelona
    bar.season(18, 11, 3, 4, 37, 23);
    bar.winner()
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
    ath.winner()
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
    //Descenso
    atl.descenso()
    //Ascenso
    ala.ascenso()

}
const seasonTres = () => {
    //Athletic Club
    ath.season(18, 11, 0, 7, 73, 33);
    ath.winner()
    //Racing Santander
    rac.season(18, 10, 2, 6, 49, 37);
    //Real Sociedad
    rso.season(18, 10, 2, 6, 42, 39);
    //FC Barcelona
    bar.season(18, 7, 7, 4, 40, 43);
    //Arenas Club
    are.season(18, 8, 2, 8, 35, 38);
    //Real Madrid
    rma.season(18, 7, 4, 7, 24, 27);
    //Real Unión Club
    run.season(18, 6, 4, 8, 41, 45);
    //Deportivo Alavés
    ala.season(18, 5, 4, 9, 25, 39);
    //RCD Espanyol
    esp.season(18, 6, 2, 10, 32, 45);
    //CE Europa
    eur.season(18, 6, 1, 11, 23, 38);
    //Descenso
    eur.descenso()
    //Ascenso
    val.ascenso()
}
const seasonCuatro = () => {
    //Real Madrid CF
    rma.season(18, 10, 8, 0, 37, 15);
    rma.winner()
    //Athletic Club
    ath.season(18, 11, 3, 4, 47, 23);
    //FC Barcelona
    bar.season(18, 10, 4, 4, 40, 26);
    //Racing Santander
    rac.season(18, 7, 6, 5, 36, 35);
    //Arenas Club
    are.season(18, 7, 3, 8, 35, 42);
    //RCD Espanyol
    esp.season(18, 7, 1, 10, 34, 39);
    //Valencia CF
    val.season(18, 6, 3, 9, 38, 47);
    //Real Sociedad
    rso.season(18, 7, 0, 11, 38, 35);
    //Deportivo Alavés
    ala.season(18, 5, 1, 12, 22, 44);
    //Real Unión Club
    run.season(18, 4, 3, 11, 24, 45);
    //Descenso
    run.descenso();
    //Ascenso
    bet.ascenso();
}
const seasonCinco = () => {
    //Real Madrid
    rma.season(18, 13, 2, 3, 49, 17);
    rma.winner()
    //Athletic Club
    ath.season(18, 13, 0, 5, 63, 30);
    //RCD Espanyol
    esp.season(18, 10, 2, 6, 33, 30);
    //FC Barcelona
    bar.season(18, 7, 5, 6, 42, 34);
    //Real Betis
    bet.season(18, 6, 5, 7, 31, 45);
    //Real Sociedad
    rso.season(18, 6, 3, 9, 41, 47);
    //Arenas Club
    are.season(18, 5, 4, 9, 39, 44);
    //Racing Santander
    rac.season(18, 6, 2, 10, 47, 58);
    //Valencia CF
    val.season(18, 4, 5, 9, 34, 53);
    //Deportivo Alavés
    ala.season(18, 5, 2, 11, 21, 42);
    //Ascenso y Descenso
    ala.descenso();
    ovi.ascenso();
}
const seasonSeis = () => {
    //Athletic Club
    ath.season(18, 11, 2, 5, 61, 27);
    ath.winner()
    //Real Madrid
    rma.season(18, 10, 2, 6, 41, 29);
    //Racing Santander
    rac.season(18, 9, 1, 8, 38, 39);
    //Real Betis
    bet.season(18, 9, 1, 8, 29, 36);
    //Real Sociedad
    rso.season(18, 7, 4, 7, 29, 33);
    //Real Oviedo
    ovi.season(18, 8, 2, 8, 51, 45);
    //Valencia CF
    val.season(18, 7, 3, 8, 28, 38);
    //RCD Espanyol
    esp.season(18, 7, 3, 8, 28, 38);
    //FC Barcelona
    bar.season(18, 8, 0, 10, 42, 40);
    //Arenas Club
    are.season(18, 3, 4, 11, 18, 49);
    //Ascenso y Descenso
    sev.ascenso();
    atl.ascenso();
}
const seasonSiete = () => {
    //Real Betis
    bet.season(22, 15, 4, 3, 43, 19);
    bet.winner()
    //Real Madrid CF
    rma.season(22, 16, 1, 5, 61, 34);
    //Real Oviedo
    ovi.season(22, 12, 2, 8, 60, 47);
    //Athletic Club
    ath.season(22, 11, 3, 8, 60, 37);
    //Sevilla FC
    sev.season(22, 11, 2, 9, 53, 38);
    //FC Barcelona
    bar.season(22, 9, 6, 7, 55, 44);
    //Atlético Madrid
    atl.season(22, 8, 5, 9, 40, 45);
    //RCD Espanyol
    esp.season(22, 9, 2, 11, 47, 59);
    //Valencia CF
    val.season(22, 9, 2, 11, 40, 49);
    //Racing Santander
    rac.season(22, 7, 3, 12, 37, 46);
    //Real Sociedad
    rso.season(22, 5, 1, 16, 28, 67);
    //Arenas Club
    are.season(22, 3, 3, 16, 17, 56);
    //Ascenso y Descenso
    her.ascenso();
    osa.ascenso();
    rso.descenso();
    are.descenso();
}
const seasonOcho = () => {
    //Athletic Club
    ath.season(22, 14, 3, 5, 59, 33);
    ath.winner()
    //Real Madrid
    rma.season(22, 13, 3, 6, 62, 35);
    //Real Oviedo
    ovi.season(22, 12, 4, 6, 63, 47);
    //Racing Santander
    rac.season(22, 13, 1, 8, 58, 46);
    //FC Barcelona
    bar.season(22, 11, 2, 9, 39, 32);
    //Hércules
    her.season(22, 11, 2, 9, 37, 41);
    //Real Betis
    bet.season(22, 9, 2, 11, 31, 46);
    //Valencia CF
    val.season(22, 7, 5, 10, 36, 42);
    //RCD Espanyol
    esp.season(22, 8, 1, 13, 36, 53);
    //Sevilla FC
    sev.season(22, 6, 4, 12, 27, 48);
    //Atlético Madrid
    atl.season(22, 6, 3, 13, 34, 50);
    //CA Osasuna
    osa.season(22, 7, 0, 15, 46, 55);
    //Ascenso y Descenso
    cel.ascenso();
    zar.ascenso();
    osa.descenso();
    ovi.descenso();
}
const seasonNueve = () => {
    //Atlético Madrid
    atl.season(22, 14, 1, 7, 43, 29);
    atl.winner()
    //Sevilla FC
    sev.season(22, 11, 6, 5, 60, 44);
    //Athletic Club
    ath.season(22, 11, 4, 7, 57, 44);
    //Real Madrid
    rma.season(22, 12, 1, 9, 47, 35);
    //RCD Espanyol
    esp.season(22, 11, 2, 9, 43, 43);
    //Hércules
    her.season(22, 9, 5, 8, 41, 34);
    //Real Zaragoza
    zar.season(22, 7, 7, 8, 30, 40);
    //Valencia CF
    val.season(22, 9, 3, 10, 40, 36);
    //FC Barcelona
    bar.season(22, 8, 3, 11, 32, 38);
    //RC Celta Vigo
    cel.season(22, 9, 1, 12, 45, 50);
    //Real Betis
    bet.season(22, 6, 4, 12, 26, 51);
    //Racing Santander
    rac.season(22, 6, 1, 15, 37, 57);
    //Ascenso y Descenso
    mur.ascenso();
    ovi.ascenso();
    bet.descenso();
    rac.descenso();
}
const seasonDiez = () => {
    //Atlético Madrid
    atl.season(22, 13, 7, 2, 70, 36);
    atl.winner()
    //Athletic Bilbao
    ath.season(22, 13, 5, 4, 49, 24);
    //Valencia CF
    val.season(22, 11, 5, 6, 60, 52);
    //FC Barcelona
    bar.season(22, 13, 1, 8, 55, 45);
    //Sevilla FC
    sev.season(22, 12, 2, 8, 70, 43);
    //Real Madrid CF
    rma.season(22, 11, 2, 9, 51, 38);
    //RCD Espanyol
    esp.season(22, 10, 2, 10, 50, 54);
    //Real Oviedo
    ovi.season(22, 7, 2, 13, 36, 63);
    //Hércules
    her.season(22, 7, 2, 13, 28, 67);
    //RC Celta Vigo
    cel.season(22, 7, 1, 14, 45, 51);
    //Real Zaragoza
    zar.season(22, 5, 4, 13, 26, 41);
    //Real Murcia CF
    mur.season(22, 5, 3, 14, 29, 55);
    //Ascenso y Descenso
    gra.ascenso();
    rso.ascenso();
    dep.ascenso();
    cas.ascenso();
    zar.descenso();
    mur.descenso();
}
const seasonOnce = () => {
    //Valencia CF
    val.season(26, 18, 4, 4, 85, 39);
    val.winner();
    //Real Madrid CF
    rma.season(26, 14, 5, 7, 65, 43);
    //Atlético Madrid
    atl.season(26, 14, 5, 7, 50, 44);
    //RC Deportivo La Coruña
    dep.season(26, 12, 4, 10, 36, 37);
    //RC Celta Vigo
    cel.season(26, 11, 6, 9, 53, 55);
    //Sevilla FC
    sev.season(26, 10, 7, 9, 58, 45)
    //Athletic Club
    ath.season(26, 10, 7, 9, 55, 41);
    //CD Castellón
    cas.season(26, 10, 6, 10, 54, 63);
    //RCD Espanyol
    esp.season(26, 10, 6, 10, 49, 42);
    //Granada CF
    gra.season(26, 10, 5, 11, 64, 52);
    //Real Oviedo
    ovi.season(26, 8, 7, 11, 42, 63);
    //FC Barcelona
    bar.season(26, 8, 3, 15, 57, 66);
    //Hércules
    her.season(26, 6, 5, 15, 42, 71);
    //Real Sociedad
    rso.season(26, 5, 2, 19, 31, 77);
    //Ascenso y Descenso
    zar.ascenso();
    bet.ascenso();
    her.descenso();
    rso.descenso();
}
const seasonDoce = () => {
    //Athletic Club
    ath.season(26, 16, 4, 6, 73, 38);
    ath.winner();
    //Sevilla FC
    sev.season(26, 15, 3, 8, 63, 47);
    //FC Barcelona
    bar.season(26, 14, 4, 8, 77, 50);
    //CD Castellón
    cas.season(26, 13, 5, 8, 41, 43);
    //RC Celta Vigo
    cel.season(26, 14, 2, 10, 52, 50);
    //Real Oviedo
    ovi.season(26, 12, 4, 10, 53, 63);
    //Valencia CF
    val.season(26, 10, 7, 9, 58, 45);
    //Atlético Madrid
    atl.season(26, 11, 5, 10, 54, 44);
    //RC Deportivo La Coruña
    dep.season(26, 7, 12, 7, 35, 32);
    //Real Madrid CF
    rma.season(26, 10, 5, 11, 52, 50);
    //RCD Espanyol
    esp.season(26, 9, 6, 11, 45, 51);
    //Granada CF
    gra.season(26, 9, 4, 13, 56, 68);
    //Real Zaragoza
    zar.season(26, 2, 9, 15, 25, 57);
    //Real Betis
    bet.season(26, 2, 6, 18, 28, 74);
    //Ascenso y Descenso
    sab.ascenso();
    rso.ascenso();
    zar.descenso();
    bet.descenso();
}
const seasonTrece = () => {
    //Valencia CF
    val.season(26, 18, 4, 4, 73, 32);
    val.winner();
    //Atlético Madrid
    atl.season(26, 15, 4, 7, 66, 49);
    //Sevilla FC
    sev.season(26, 12, 8, 6, 60, 46);
    //Real Oviedo
    ovi.season(26, 12, 5, 9, 71, 47);
    //CD Castellón
    cas.season(26, 13, 3, 10, 42, 36);
    //FC Barcelona
    bar.season(26, 10, 8, 8, 59, 46);
    //Real Madrid CF
    rma.season(26, 11, 6, 9, 48, 38);
    //Granada CF
    gra.season(26, 9, 8, 9, 41, 46);
    //CD Sabadell
    sab.season(26, 11, 3, 12, 53, 60);
    //Athletic Club
    ath.season(26, 10, 5, 11, 47, 51);
    //RCD Espanyol
    esp.season(26, 9, 5, 12, 42, 50);
    //RC Deportivo
    dep.season(26, 6, 7, 13, 35, 64);
    //Real Sociedad
    rso.season(26, 5, 7, 14, 34, 54);
    //RC Celta
    cel.season(26, 2, 5, 19, 27, 37);
    //Ascenso y Descenso
    rso.descenso();
    cel.descenso();
    spo.ascenso();
    mur.ascenso();
}
const seasonCatorce = () => {
    //FC Barcelona
    bar.season(26, 17, 5, 4, 50, 30);
    bar.winner();
    //Real Madrid
    rma.season(26, 18, 2, 6, 68, 35);
    //Atlético Madrid
    atl.season(26, 13, 5, 8, 46, 41);
    //Real Oviedo
    ovi.season(26, 13, 5, 8, 50, 48);
    //Valencia CF
    val.season(26, 12, 6, 8, 61, 35);
    //Athletic Club
    ath.season(26, 14, 2, 10, 54, 41);
    //Sporting Gijón
    spo.season(26, 9, 6, 11, 42, 46);
    //CD Castellón
    cas.season(26, 10, 4, 12, 43, 50);
    //RCD Espanyol
    esp.season(26, 10, 3, 13, 44, 39);
    //Sevilla FC
    sev.season(26, 9, 4, 13, 52, 49);
    //Real Murcia
    mur.season(26, 7, 5, 14, 40, 58);
    //Granada CF
    gra.season(26, 7, 5, 14, 40, 55);
    //CE Sabadell
    sab.season(26, 6, 5, 15, 30, 67);
    //RC Deportivo
    dep.season(26, 5, 7, 14, 36, 62);
    //Ascenso y Descenso
    sab.descenso();
    dep.descenso();
    gra.descenso();
    alc.ascenso();
    her.ascenso();
    cel.ascenso();
}
const seasonQuince = () => {
    //Sevilla FC
    sev.season(26, 14, 8, 4, 53, 37);
    sev.winner();
    //FC Barcelona
    bar.season(26, 14, 7, 5, 48, 31);
    //Athletic Club
    ath.season(26, 14, 5, 7, 63, 38);
    //Real Madrid
    rma.season(26, 11, 9, 6, 46, 30);
    //Real Oviedo
    ovi.season(26, 10, 10, 6, 44, 37);
    //Valencia CF
    val.season(26, 9, 10, 7, 44, 36);
    //Atlético Madrid
    atl.season(26, 10, 6, 10, 50, 48);
    //CD Castellón
    cas.season(26, 11, 4, 11, 38, 54);
    //Sporting Gijón
    spo.season(26, 9, 7, 10, 37, 39);
    //Celta Vigo
    cel.season(26, 9, 3, 14, 57, 56);
    //Real Murcia
    mur.season(26, 5, 10, 11, 21, 39);
    //RCD Espanyol
    esp.season(26, 6, 7, 13, 41, 53);
    //CD Alcoyano
    alc.season(26, 7, 5, 14, 39, 54);
    //Hercules
    her.season(26, 5, 5, 16, 30, 59);
    //Ascenso y descenso
    alc.descenso();
    her.descenso();
    sab.ascenso();
    dep.ascenso();
}
const seasonDieciseis = () => {
    //Valencia CF
    val.season(26, 16, 2, 8, 54, 34);
    val.winner();
    //Athletic Club
    ath.season(26, 15, 4, 7, 72, 38);
    //Atlético Madrid
    atl.season(26, 13, 6, 7, 58, 44);
    //FC Barcelona
    bar.season(26, 14, 3, 9, 59, 42);
    //CD Sabadell
    sab.season(26, 11, 8, 7, 42, 36);
    //Sevilla FC
    sev.season(26, 12, 5, 9, 54, 48);
    //Real Madrid
    rma.season(26, 11, 5, 10, 62, 56);
    //Real Oviedo
    ovi.season(26, 10, 7, 9, 52, 42);
    //Celta Vigo
    cel.season(26, 11, 4, 11, 53, 48);
    //Sporting Gijón
    spo.season(26, 10, 5, 11, 51, 59);
    //RCD Espanyol
    esp.season(26, 9, 1, 16, 46, 59);
    //Real Murcia
    mur.season(26, 6, 7, 13, 30, 58);
    //Deportivo
    dep.season(26, 5, 8, 13, 32, 60);
    //CD Castellón
    cas.season(26, 4, 5, 17, 39, 80);
    //Ascenso y Descenso
    dep.descenso();
    cas.descenso();
    mur.descenso();
    alc.ascenso();
    gim.ascenso();
    rso.ascenso();
}
const seasonDiecisiete = () => {
    //FC Barcelona
    bar.season(26, 15, 7, 4, 65, 31);
    bar.winner();
    //Valencia CF
    val.season(26, 15, 4, 7, 59, 34);
    //Atlético Madrid
    atl.season(26, 13, 7, 6, 73, 45);
    //Celta Vigo
    cel.season(26, 15, 3, 8, 59, 48);
    //Sevilla FC
    sev.season(26, 12, 5, 9, 50, 40);
    //Athletic Club
    ath.season(26, 12, 4, 10, 56, 44);
    //Nastic de Tarragona
    gim.season(26, 10, 4, 12, 49, 55);
    //RCD Espanyol
    esp.season(26, 9, 6, 11, 39, 47);
    //Real Oviedo
    ovi.season(26, 9, 5, 12, 49, 57);
    //CD Alcoyano
    alc.season(26, 9, 4, 13, 40, 52);
    //Real Madrid
    rma.season(26, 7, 7, 12, 41, 61);
    //CD Sabadell
    sab.season(26, 9, 3, 14, 41, 62);
    //Real Sociedad
    rso.season(26, 8, 3, 15, 38, 60);
    //Sporting Gijón
    spo.season(26, 7, 4, 15, 37, 69);
    //Ascenso y Descenso
    rso.descenso();
    spo.descenso();
    rva.ascenso();
    dep.ascenso();
}
const seasonDieciocho = () => {
    //FC Barcelona
    bar.season(26, 16, 5, 5, 66, 36);
    bar.winner();
    //Valencia CF
    val.season(26, 16, 3, 7, 78, 47);
    //Real Madrid
    rma.season(26, 15, 4, 7, 67, 42);
    //Atlético Madrid
    atl.season(26, 15, 4, 7, 54, 32);
    //Real Oviedo
    ovi.season(26, 13, 4, 9, 50, 43);
    //Athletic Club
    ath.season(26, 11, 2, 13, 61, 63);
    //RCD Espanyol
    esp.season(26, 10, 4, 12, 51, 46);
    //Sevilla FC
    sev.season(26, 11, 1, 14, 35, 40);
    //Gimnastic
    gim.season(26, 10, 3, 13, 59, 72);
    //Deportivo La Coruña
    dep.season(26, 9, 4, 13, 56, 60);
    //Celta Vigo
    cel.season(26, 9, 4, 13, 51, 64);
    //Real Valladolid
    rva.season(26, 10, 2, 14, 38, 59);
    //CD Alcoyano
    alc.season(26, 8, 5, 13, 30, 54);
    //CD Sabadell
    sab.season(26, 5, 3, 18, 43, 81);
    //Ascenso y Descenso
    alc.descenso();
    sab.descenso();
    rso.ascenso();
    cdm.ascenso();
}
const seasonDiecinueve = () => {
    //Atlético Madrid
    atl.season(26, 15, 3, 8, 71, 51);
    atl.winner();
    //Deportivo La Coruña
    dep.season(26, 12, 8, 6, 48, 38);
    //Valencia CF
    val.season(26, 12, 7, 7, 71, 43);
    //Real Madrid
    rma.season(26, 11, 9, 6, 60, 49);
    //FC Barcelona
    bar.season(26, 13, 3, 10, 67, 47);
    //Athletic Club
    ath.season(26, 12, 5, 9, 72, 72);
    //Celta Vigo
    cel.season(26, 13, 2, 11, 62, 47);
    //Real Sociedad
    rso.season(26, 9, 9, 8, 57, 43);
    //Real Valladolid
    rva.season(26, 8, 9, 9, 49, 46);
    //Sevilla FC
    sev.season(26, 11, 3, 12, 60, 61);
    //RCD Espanyol
    esp.season(26, 8, 6, 12, 42, 64);
    //CD Málaga
    cdm.season(26, 8, 5, 13, 44, 51);
    //Nastic
    gim.season(26, 7, 2, 17, 39, 99);
    //Real Oviedo
    ovi.season(26, 4, 7, 15, 30, 65);
    //Ascensos y Descensos
    gim.descenso();
    ovi.descenso();
    rac.ascenso();
    uel.ascenso();
    mur.ascenso();
    alc.ascenso();
}
const seasonVeinte = () => {
    //Atlético Madrid
    atl.season(30, 17, 6, 7, 87, 50);
    atl.winner();
    //Sevilla FC
    sev.season(30, 17, 4, 9, 79, 46);
    //Valencia CF
    val.season(30, 17, 3, 10, 64, 48);
    //FC Barcelona
    bar.season(30, 16, 3, 11, 83, 61);
    //Real Sociedad
    rso.season(30, 15, 5, 10, 77, 56);
    //Real Valladolid
    rva.season(30, 14, 5, 11, 51, 51);
    //Athletic Club
    ath.season(30, 15, 3, 12, 88, 56);
    //Celta Vigo
    cel.season(30, 15, 3, 12, 62, 56);
    //Real Madrid
    rma.season(30, 13, 5, 12, 80, 71);
    //Racing Santander
    rac.season(30, 12, 6, 12, 49, 60);
    //Deportivo
    dep.season(30, 13, 4, 13, 64, 47);
    //Espanyol
    esp.season(30, 13, 4, 13, 82, 72);
    //CD Málaga
    cdm.season(30, 12, 5, 13, 55, 52);
    //Real Murcia
    mur.season(30, 8, 3, 19, 40, 86);
    //CD Alcoyano
    alc.season(30, 6, 2, 22, 36, 92);
    //UE Lleida
    uel.season(30, 6, 1, 23, 41, 134);
    //Ascenso y Descenso
    alc.descenso();
    uel.descenso();
    cdm.descenso();
    mur.descenso();
    spo.ascenso();
    tet.ascenso();
    lpa.ascenso();
    zar.ascenso();
}
const seasonVeintiuno = () => {
    //FC Barcelona
    bar.winner()
    bar.season(30, 19, 5, 6, 92, 43);
    //Athletic Club
    ath.season(30, 17, 6, 7, 78, 46);
    //Real Madrid
    rma.season(30, 16, 6, 8, 79, 50);
    //Atlético Madrid
    atl.season(30, 16, 5, 9, 80, 57);
    //Valencia CF
    val.season(30, 15, 5, 10, 68, 51);
    //Sevilla FC
    sev.season(30, 14, 4, 12, 69, 57);
    //Espanyol
    esp.season(30, 14, 4, 12, 69, 62);
    //Real Valladolid
    rva.season(30, 9, 11, 10, 47, 43);
    //Celta Vigo
    cel.season(30, 12, 3, 15, 64, 66);
    //Real Sociedad
    rso.season(30, 11, 4, 15, 60, 59);
    //Deportivo
    dep.season(30, 10, 5, 15, 46, 70);
    //Real Zaragoza
    zar.season(30, 10, 5, 15, 54, 73);
    //Sporting Gijón
    spo.season(30, 10, 5, 15, 49, 75);
    //Racing Santander
    rac.season(30, 9, 7, 14, 45, 65);
    //Las Palmas
    lpa.season(30, 9, 4, 17, 36, 85);
    //Atlético Tetuán
    tet.season(30, 7, 5, 18, 51, 85);
    //Ascenso y descenso
    lpa.descenso();
    tet.descenso();
    ovi.ascenso();
    cdm.ascenso();
}
const seasonVeintidos = () => {
    //FC Barcelona
    bar.winner();
    bar.season(30, 19, 4, 7, 82, 43);
    //Valencia CF
    val.season(30, 16, 8, 6, 66, 42);
    //Real Madrid
    rma.season(30, 18, 3, 9, 67, 49);
    //Espanyol
    esp.season(30, 16, 4, 10, 64, 40);
    //Sevilla
    sev.season(30, 16, 2, 12, 70, 57);
    //Athletic
    ath.season(30, 14, 4, 12, 83, 52);
    //Sporting Gijon
    spo.season(30, 11, 8, 11, 39, 54);
    //Atlético Madrid
    atl.season(30, 13, 4, 13, 65, 70);
    //Real Oviedo
    ovi.season(30, 12, 5, 13, 63, 62);
    //Real Sociedad
    rso.season(30, 10, 8, 12, 54, 61);
    //Racing Santander
    rac.season(30, 11, 5, 14, 46, 61);
    //Real Valladolid
    rva.season(30, 10, 5, 15, 48, 54);
    //Celta Vigo
    cel.season(30, 15, 5, 15, 54, 69);
    //Deportivo
    dep.season(30, 9, 6, 15, 49, 78);
    //CD Málaga
    cdm.season(30, 10, 2, 18, 47, 69);
    //Real Zaragoza
    zar.season(30, 6, 5, 19, 38, 74);
    //Ascenso y descenso
    cdm.descenso();
    zar.descenso();
    osa.ascenso();
    jae.ascenso();
}
const seasonVeintitres = () => {
    //Real Madrid
    rma.winner();
    rma.season(30, 17, 6, 7, 72, 41);
    //FC Barcelona
    bar.season(30, 16, 4, 10, 74, 39);
    //Valencia
    val.season(30, 14, 6, 10, 69, 51);
    //Espanyol
    esp.season(30, 14, 6, 10, 50, 36);
    //Sevilla
    sev.season(30, 15, 2, 13, 57, 49);
    //Athletic
    ath.season(30, 12, 8, 10, 54, 44);
    //Deportivo
    dep.season(30, 13, 5, 12, 41, 46);
    //Racing Santander
    rac.season(30, 12, 7, 11, 53, 61);
    //Atlético Madrid
    atl.season(30, 11, 7, 12, 57, 47);
    //Celta Vigo
    cel.season(30, 12, 5, 13, 47, 54);
    //Real Valladolid
    rva.season(30, 12, 5, 13, 50, 60);
    //Real Sociedad
    rso.season(30, 11, 7, 12, 44, 58);
    //Osasuna
    osa.season(30, 12, 4, 14, 46, 54);
    //Real Jaén
    jae.season(30, 11, 6, 13, 55, 70);
    //Real Oviedo
    ovi.season(30, 8, 6, 16, 31, 53);
    //Sporting Gijón
    spo.season(30, 7, 2, 21, 44, 81);
    //Ascenso y Descenso
    ovi.descenso();
    spo.descenso();
    osa.descenso();
    jae.descenso();
    cdm.ascenso();
    her.ascenso();
    ala.ascenso();
    lpa.ascenso();
}
const seasonVeinticuatro = () => {
    //Real Madrid
    rma.winner();
    rma.season(30, 20, 6, 4, 80, 31);
    //Barcelona
    bar.season(30, 17, 7, 6, 75, 39);
    //Athletic
    ath.season(30, 15, 9, 6, 78, 39);
    //Sevilla
    sev.season(30, 15, 4, 11, 74, 58);
    //Valencia
    val.season(30, 15, 3, 12, 71, 60);
    //Hercules
    her.season(30, 11, 9, 10, 46, 57);
    //Deportivo
    dep.season(30, 12, 6, 12, 52, 59);
    //Atlético Madrid
    atl.season(30, 11, 7, 12, 59, 64);
    //Real Valladolid
    rva.season(30, 11, 5, 14, 48, 56);
    //Alavés
    ala.season(30, 11, 5, 14, 51, 62);
    //Celta Vigo
    cel.season(30, 10, 7, 13, 55, 60);
    //Las Palmas
    lpa.season(30, 10, 7, 13, 45, 69);
    //Espanyol
    esp.season(30, 8, 10, 12, 42, 46);
    //Real Sociedad
    rso.season(30, 9, 6, 15, 48, 53);
    //Racing Santander
    rac.season(30, 9, 2, 19, 39, 81);
    //CD Malaga
    cdm.season(30, 6, 7, 17, 36, 65);
    //Ascensos y Descensos
    rac.descenso();
    cdm.descenso();
    cul.ascenso();
    mur.ascenso();
}
const seasonVeinticinco = () => {
    //Athletic
    ath.winner();
    ath.season(30, 22, 4, 4, 79, 31);
    //Barcelona
    bar.season(30, 22, 3, 5, 67, 26);
    //Real Madrid
    rma.season(30, 18, 2, 10, 81, 39);
    //Sevilla
    sev.season(30, 17, 2, 11, 75, 44);
    //Atlético Madrid
    atl.season(30, 14, 5, 11, 75, 49);
    //Valencia
    val.season(30, 13, 6, 11, 58, 50);
    //Espanyol
    esp.season(30, 14, 3, 13, 50, 56);
    //Real Sociedad
    rso.season(30, 11, 8, 11, 48, 53);
    //Real Valladolid
    rva.season(30, 13, 4, 13 ,52, 55);
    //Celta Vigo
    cel.season(30, 12, 3, 15, 52, 75);
    //Las Palmas
    lpa.season(30, 11, 4, 15, 49, 60);
    //Deportivo
    dep.season(30, 11, 4, 15, 60, 80);
    //Real Murcia
    mur.season(30, 10, 5, 15, 46, 66);
    //Alavés
    ala.season(30, 9, 6, 15, 49, 73);
    //Cultural Leonesa
    cul.season(30, 5, 4, 21, 34, 65);
    //Hercules
    her.season(30, 5, 3, 22, 33, 86);
    //Ascensos y Descensos
    cul.descenso();
    her.descenso();
    mur.descenso();
    ala.descenso();
    con.ascenso();
    zar.ascenso();
    osa.ascenso();
    jae.ascenso();

}
const seasonVeintiseis = () => {
    //Real Madrid
    rma.winner();
    rma.season(30, 20, 4, 6, 74, 35);
    //Sevilla
    sev.season(30, 17, 5, 8, 64, 49);
    //Barcelona
    bar.season(30, 16, 7, 7, 70, 37);
    //Athletic
    ath.season(30, 15, 7, 8, 59, 45);
    //Atlético
    atl.season(30, 15, 4, 11, 65, 45);
    //Osasuna
    osa.season(30, 12, 7, 11, 40, 38);
    //Espanyol
    esp.season(30, 11, 8, 11, 39, 48);
    //Real Valladolid
    rva.season(30, 11, 6, 13, 52, 58);
    //Real Zaragoza
    zar.season(30, 11, 6, 13, 37, 51);
    //Las Palmas
    lpa.season(30, 9, 9, 12, 41, 58);
    //Valencia
    val.season(30, 10, 7, 13, 43, 46);
    //Real Sociedad
    rso.season(30, 9, 8, 13, 39, 47);
    //Celta Vigo
    cel.season(30, 8, 7, 15, 39, 47);
    //Real Jaén
    jae.season(30, 9, 5, 16, 37, 55);
    //Deportivo
    dep.season(30, 10, 2, 18, 41, 61);
    //CD Condal
    con.season(30, 7, 8, 15, 37, 57);
    //Ascensos y Descensos
    dep.descenso();
    con.descenso();
    spo.ascenso();
    gra.ascenso();
}
const seasonVeintisiete = () => {
    //Real Madrid
    rma.winner();
    rma.season(30, 20, 5, 5, 71, 26);
    //Atlético Madrid
    atl.season(30, 16, 10, 4, 78, 43);
    //FC Barcelona
    bar.season(30, 17, 4, 9, 69, 38);
    //Valencia
    val.season(30, 13, 10, 7, 56, 40);
    //Osasuna
    osa.season(30, 15, 5, 10, 53, 43);
    //Athletic Bilbao
    ath.season(30, 14, 4, 12, 56, 48);
    //Celta Vigo
    cel.season(30, 13, 6, 11, 50, 51);
    //Espanyol
    esp.season(30, 11, 6, 13, 48, 46);
    //Real Sociedad
    rso.season(30, 10, 7, 13, 38, 44);
    //Sevilla
    sev.season(30, 9, 7, 14, 45, 55);
    //Las Palmas
    lpa.season(30, 9, 7, 14, 34, 65);
    //Sporting Gijón
    spo.season(30, 10, 4, 16, 46, 57);
    //Granada
    gra.season(30, 11, 2, 17, 35, 53);
    //Real Zaragoza
    zar.season(30, 8, 8, 14, 39, 52);
    //Valladolid
    rva.season(30, 9, 5, 16, 45, 73);
    //Real Jaén
    jae.season(30, 9, 2, 19, 29, 58);
    //Ascensos y Descensos
    rva.descenso();
    jae.descenso();
    ovi.ascenso();
    bet.ascenso();
}
const seasonVeintiocho = () => {
    //Barcelona
    bar.winner();
    bar.season(30, 24, 3, 3, 96, 26);
    //Real Madrid
    rma.season(30, 21, 5, 4, 89, 29);
    //Athletic
    ath.season(30, 17, 2, 11, 72, 33);
    //Valencia
    val.season(30, 13, 7, 10, 47, 41);
    //Atlético Madrid
    atl.season(30, 13, 6, 11, 58, 48);
    //Real Betis
    bet.season(30, 14, 4, 12, 54, 53);
    //Espanyol
    esp.season(30, 11, 7, 12, 42, 45);
    //Osasuna
    osa.season(30, 12, 4, 14, 44, 59);
    //Real Zaragoza
    zar.season(30, 12, 4, 14, 47, 60);
    //Real Sociedad
    rso.season(30, 9, 10, 11, 32, 33);
    //Real Oviedo
    ovi.season(30, 11, 5, 14, 31, 49);
    //Sevilla
    sev.season(30, 12, 2, 16, 44, 58);
    //Granada
    gra.season(30, 11, 4, 15, 30, 43);
    //Las Palmas
    lpa.season(30, 10, 4, 16, 43, 69);
    //Sporting Gijon
    spo.season(30, 7, 6, 17, 25, 70);
    //Celta Vigo
    cel.season(30, 4, 5, 21, 21, 59);
    //Ascenso y Descenso
    spo.descenso();
    cel.descenso();
    rva.ascenso();
    elc.ascenso();
}