var Carte = {
    bon: false,
    place: 0,

    init: function (nom, num) {
        this.nom = nom;
        this.num = num;
        this.location = "img_super/" + nom + ".png";
        this.dos = "img_super/dos" + nom + ".png";
    }
}

function preparationCartes() {
    var tabCarte = [];

    //2 cartes Antman
    var antman1 = Object.create(Carte);
    var antman2 = Object.create(Carte);
    antman1.init("antman", 1);
    antman2.init("antman", 2);
    tabCarte.push(antman1);
    tabCarte.push(antman2);

//2 cartes Batgirl
    var batgirl1 = Object.create(Carte);
    var batgirl2 = Object.create(Carte);
    batgirl1.init("batgirl", 1);
    batgirl2.init("batgirl", 2);
    tabCarte.push(batgirl1);
    tabCarte.push(batgirl2);

//2 cartes Batman
    var batman1 = Object.create(Carte);
    var batman2 = Object.create(Carte);
    batman1.init("batman", 1);
    batman2.init("batman", 2);
    tabCarte.push(batman1);
    tabCarte.push(batman2);

//2 cartes Captain'America
    var captainamerica1 = Object.create(Carte);
    var captainamerica2 = Object.create(Carte);
    captainamerica1.init("captainamerica", 1);
    captainamerica2.init("captainamerica", 2);
    tabCarte.push(captainamerica1);
    tabCarte.push(captainamerica2);

//2 cartes Deadpool
    var deadpool1 = Object.create(Carte);
    var deadpool2 = Object.create(Carte);
    deadpool1.init("deadpool", 1);
    deadpool2.init("deadpool", 2);
    tabCarte.push(deadpool1);
    tabCarte.push(deadpool2);

//2 cartes Docteur Strange
    var drstrange1 = Object.create(Carte);
    var drstrange2 = Object.create(Carte);
    drstrange1.init("drstrange", 1);
    drstrange2.init("drstrange", 2);
    tabCarte.push(drstrange1);
    tabCarte.push(drstrange2);

//2 cartes Flash
    var flash1 = Object.create(Carte);
    var flash2 = Object.create(Carte);
    flash1.init("flash", 1);
    flash2.init("flash", 2);
    tabCarte.push(flash1);
    tabCarte.push(flash2);

//2 cartes Green Arrow
    var greenarrow1 = Object.create(Carte);
    var greenarrow2 = Object.create(Carte);
    greenarrow1.init("greenarrow", 1);
    greenarrow2.init("greenarrow", 2);
    tabCarte.push(greenarrow1);
    tabCarte.push(greenarrow2);

//2 cartes Harley Quinn
    var harleyquinn1 = Object.create(Carte);
    var harleyquinn2 = Object.create(Carte);
    harleyquinn1.init("harleyquinn", 1);
    harleyquinn2.init("harleyquinn", 2);
    tabCarte.push(harleyquinn1);
    tabCarte.push(harleyquinn2);

//2 cartes Hulk
    var hulk1 = Object.create(Carte);
    var hulk2 = Object.create(Carte);
    hulk1.init("hulk", 1);
    hulk2.init("hulk", 2);
    tabCarte.push(hulk1);
    tabCarte.push(hulk2);

//2 cartes Iron Man
    var ironman1 = Object.create(Carte);
    var ironman2 = Object.create(Carte);
    ironman1.init("ironman", 1);
    ironman2.init("ironman", 2);
    tabCarte.push(ironman1);
    tabCarte.push(ironman2);


//2 cartes Spiderman
    var spiderman1 = Object.create(Carte);
    var spiderman2 = Object.create(Carte);
    spiderman1.init("spiderman", 1);
    spiderman2.init("spiderman", 2);
    tabCarte.push(spiderman1);
    tabCarte.push(spiderman2);

//2 cartes Supergirl
    var supergirl1 = Object.create(Carte);
    var supergirl2 = Object.create(Carte);
    supergirl1.init("supergirl", 1);
    supergirl2.init("supergirl", 2);
    tabCarte.push(supergirl1);
    tabCarte.push(supergirl2);

//2 cartes Superman
    var superman1 = Object.create(Carte);
    var superman2 = Object.create(Carte);
    superman1.init("superman", 1);
    superman2.init("superman", 2);
    tabCarte.push(superman1);
    tabCarte.push(superman2);

//2 cartes Thor
    var thor1 = Object.create(Carte);
    var thor2 = Object.create(Carte);
    thor1.init("thor", 1);
    thor2.init("thor", 2);
    tabCarte.push(thor1);
    tabCarte.push(thor2);

//2 cartes Wonderwoman
    var wonderwoman1 = Object.create(Carte);
    var wonderwoman2 = Object.create(Carte);
    wonderwoman1.init("wonderwoman", 1);
    wonderwoman2.init("wonderwoman", 2);
    tabCarte.push(wonderwoman1);
    tabCarte.push(wonderwoman2);

    return tabCarte;
}


function melangerCartes(a) {
    var j = 0;
    var valI = '';
    var l = a.length - 1;
    while (l >= 0) {
        j = Math.floor(Math.random() * l);
        valI = a[l];
        a[l] = a[j];
        a[j] = valI;
        l = l - 1;
    }
    return a;
}

var img = [];

function distribuerCartes(tabCartes) {

    var tapis = document.getElementById('tapis');

    for (var i = 0; i < tabCartes.length; i++) {
        img[i] = document.createElement('img');
        img[i].className = "cartes";
        img[i].id = i;
        img[i].src = tabCartes[i].dos;
        tabCartes[i].place = i;
        tapis.appendChild(img[i]);
    }
}

var tabCartes = preparationCartes();
melangerCartes(tabCartes);
distribuerCartes(tabCartes);

/////Gestion des événements///////////////////////
var btnGo = document.getElementById('btn-go');
var btnStop = document.getElementById('btn-stop');

btnStop.addEventListener('click', function () {
    alert("abandon !");
    tourner(true);
});


btnGo.addEventListener('click', function () {
    tourner(true);
    chrono(20, 'chrono');
    var chr = document.getElementById('chrono');
    chr.style.visibility = "visible";

    /*
     var tsImg = $('.img');
     for(var i=0;i<tsImg.length;i++){
       tsImg[i].attr("disabled","disabled");
     }
*/
});

var images = document.getElementsByTagName('img');


var click = 1;
var comp = false;
var imgChoix = [];
var ind = -1;
var nbErr = 0;
var nbScore = 0;
var nbCoup = 0;
var num = [];
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        ind++;
        imgChoix[ind] = this;
        imgChoix[ind].src = tabCartes[imgChoix[ind].id].location;

        if (ind === 1) {
            nbCoup++;
            if (( tabCartes[imgChoix[0].id].nom === tabCartes[imgChoix[1].id].nom) && ( tabCartes[imgChoix[0].id].place !== tabCartes[imgChoix[1].id].place)) {
                alert("Bravo");
                nbScore++
                tabCartes[imgChoix[0].id].bon = true;
                tabCartes[imgChoix[1].id].bon = true;

            } else {
                if (tabCartes[imgChoix[0].id].place === tabCartes[imgChoix[1].id].place) {
                    alert("erreur : pas la même carte, svp!");
                }
                else {
                    alert("faux ");
                    nbErr++;
                }

                tabCartes[imgChoix[0].id].bon = false;
                tabCartes[imgChoix[1].id].bon = false;
                // tourner(false);
                ind = 0;
            }
            ind = -1;
            tourner(false);
        }
        if (nbScore === 16) {
            alert("Vous avez gagné en " + nbCoup + " tentatives et avez fait " + nbErr + " erreurs !");
        }

        $("#score").html("SCORE : " + nbScore);
        $("#erreur").html("ERREUR : " + nbErr);

    });
}

function tourner(sens) {
    var tabImg = document.getElementsByTagName('img');

    if (sens === true) {
        for (var i = 0; i < tabImg.length; i++) {
            tabImg[i].src = tabCartes[i].location;
        }
    } else {
        for (var j = 0; j < tabImg.length; j++) {
            if (tabCartes[j].bon === false) {
                tabImg[j].src = tabCartes[j].dos;
            }

        }
    }

}
