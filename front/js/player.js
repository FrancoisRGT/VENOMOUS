let socket = io();

let inRoom = false
let inComputer = false
let inTable = false
let inTV = false
let inFrigo = false
let inLettre = false
let PC_is_lock = true

let PC = document.querySelector('#PC')
let PClock = document.querySelector('#PClock')
PClock.style.display = "none"
PC.style.display = "none"

let FondBureau = document.querySelector('#fondBureau')
let FondPC = document.querySelector('#fondPC')
FondBureau.style.display = "none"
FondPC.style.display = "none"

let FondTele =document.querySelector("#fondTele")
FondTele.style.display = 'none'
let FondFrigo =document.querySelector("#fondFrigo")
FondFrigo.style.display = 'none'
let FondTable =document.querySelector("#fondTable")
FondTable.style.display = 'none'

let Room = document.querySelector('#Room')
Room.style.display = "block"
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/MeublesTransp/canapeTranspa.png")'},200)
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/MeublesTransp/entreeTranspa.png")'},400)
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/MeublesTransp/planteTranspa.png")'},600)
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/MeublesTransp/tableChevetTranspa.png")'},800)
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/MeublesTransp/teleTranspa.png")'},1000)
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/room.png")'},1200)
let waiter = document.querySelector('#waiter')
waiter.style.display = "none"

let ClickBureau = document.querySelector('.BureauClick')
let Ordi = document.querySelector('#Ordi')  
let ClickPC = document.querySelector('.clickPC')
let Table = document.querySelector('#Table')
let ClickTable = document.querySelector('.TableClick')
let TV = document.querySelector('#TV')
let ClickTV = document.querySelector('.TVClick')
let Frigo = document.querySelector('#Frigo')
let ClickFrigo = document.querySelector('.FrigoClick')
let Lettre = document.querySelector('#Lettre')
let ClickLettre = document.querySelector('.LettreClick')

ClickLettre.style.display = "none"
ClickFrigo.style.display = "none"
ClickTV.style.display = "none"
ClickTable.style.display = "none"
ClickBureau.style.display = "none"

let canvas = document.querySelector(".myCanvas");
let ctx = canvas.getContext('2d');
ctx.translate(0.5, 0.5);
  
// Set display size (vw/vh).
var sizeWidth = 90 * window.innerWidth / 100;
var sizeHeight = 92 * window.innerHeight / 100;
  
//Setting the canvas site and width to be responsive 
canvas.width = sizeWidth;
canvas.height = sizeHeight;
canvas.style.width = sizeWidth;
canvas.style.height = sizeHeight;

let DownPressed = false;
let UpPressed = false;
let LeftPressed = false;
let RightPressed = false;
let ShiftPressed = false;

let x = window.innerWidth/2;
let y = window.innerHeight/2;

var sprites = new Image();
sprites.src = "../front/image/Personnage.png"
console.log(sprites)

function drawBall(side, step) {
    ctx.beginPath();
    switch(side){
        case 0:
            ctx.drawImage(sprites,64*step, 64*10, 64,64, x-50, y-(64*1.7), 64*1.7,64*1.7)
            break;
        case 1:
            ctx.drawImage(sprites,64*step, 64*8, 64,64, x-50, y-(64*1.7), 64*1.7,64*1.7)
            break;
        case 2:
            ctx.drawImage(sprites,64*step, 64*11, 64,64, x-50, y-(64*1.7), 64*1.7,64*1.7)
            break;
        case 3:
            ctx.drawImage(sprites,64*step, 64*9, 64,64, x-50, y-(64*1.7), 64*1.7,64*1.7)
            break;
        case 4:
            ctx.drawImage(sprites,64*step, 64*20, 64,64, x-50, y-(64*1.7), 64*1.7,64*1.7)
            break;
    }
    ctx.closePath();
}

let side = 0
let step = 1
let walk = 0

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "ArrowDown") {
        DownPressed = true;
        //Lettre.log("x :" + x + "y :" + y)
    }
    else if(e.key == "ArrowUp") {
        UpPressed = true;
        //Lettre.log("x :" + x + "y :" + y)
    }
    if(e.key == "ArrowLeft") {
        LeftPressed = true;
        //Lettre.log("x :" + x + "y :" + y)
    }
    else if(e.key == "ArrowRight") {
        RightPressed = true;
        //Lettre.log("x :" + x + "y :" + y)
    }
    else if(e.key == "Shift") {
        ShiftPressed = true;
        //Lettre.log("x :" + x + "y :" + y)
    }
}

function keyUpHandler(e) {
    if(e.key == "ArrowDown") {
        DownPressed = false;
    }
    else if(e.key == "ArrowUp") {
        UpPressed = false;
    }
    if(e.key == "ArrowLeft") {
        LeftPressed = false;
    }
    else if(e.key == "ArrowRight") {
        RightPressed = false;
    }
    else if(e.key == "Shift") {
        ShiftPressed = false;
        //Lettre.log("x :" + x + "y :" + y)
    }
}

function updatePersonnage() {
    if(inRoom == true){

        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall(side, step);
        
        if(DownPressed) {
            side = 0
            walk++
            if(walk >= 3){
                step++
                walk=0
            }
            if(step >= 9){
                step = 1
            }
            y += 5;
            if((y >= window.innerHeight*0.91) || 
              ((x >= window.innerWidth*0.6811023622) && ( y >= window.innerHeight*0.56)) ||
              ((y >= window.innerHeight*0.67) && (x >= window.innerWidth*0.291015625) && (x <= window.innerWidth*0.335)) ||
              ((y >= window.innerHeight*0.87) && (x <= window.innerWidth*0.291015625)) ||
              ((x <= window.innerWidth*0.26171875) && (y >= window.innerHeight*0.76)) ||
              ((x <= window.innerWidth*0.16) && (y >= window.innerHeight*0.69)) ||
              ((y >= window.innerHeight*0.6) && (x <= window.innerWidth*0.4537760416) && (x >= window.innerWidth*0.374) && (y <= window.innerHeight*0.775)) ||
              ((y <= window.innerHeight*0.635) && (x >= window.innerWidth*0.52) && (y >= window.innerHeight*0.4868965517241379) && (x <= window.innerWidth*0.671875)) ||
              ((x >= window.innerWidth*0.543) && (y <= window.innerHeight*0.7558620689655172) && (x <= window.innerWidth*0.6355) && (y >= window.innerHeight*0.4868965517241379)) ||
              ((x >= window.innerWidth*0.54) && (y >= window.innerHeight*0.86) && (x <= window.innerWidth*0.649)) ||
              ((x >= window.innerWidth*0.72) && (y >= window.innerHeight*0.53)) ||
              ((y >= window.innerHeight*0.38) && (x >= window.innerWidth*0.245) && (y <= window.innerHeight*0.568) && (x <= window.innerWidth*0.3561197916))){
                y -=5
            }
        }
        if(UpPressed) {
            side = 1
            walk++
            if(walk >= 3){
                step++
                walk=0
            }
            if(step >= 9){
                step = 1
            }
            y -= 5;
            if((y <= window.innerHeight*0.29654036244 ) || 
              ((x >= window.innerWidth*0.665) && (y <= window.innerHeight*0.38714991762)) ||
              ((y >= window.innerHeight*0.6) && (x <= window.innerWidth*0.4537760416) && (x >= window.innerWidth*0.374) && (y <= window.innerHeight*0.775)) ||
              ((y <= window.innerHeight*0.635) && (x >= window.innerWidth*0.52) && (y >= window.innerHeight*0.4868965517241379) && (x <= window.innerWidth*0.667)) ||
              ((x >= window.innerWidth*0.543) && (y <= window.innerHeight*0.7558620689655172) && (x <= window.innerWidth*0.6355) && (y >= window.innerHeight*0.4868965517241379)) ||
              ((x >= window.innerWidth*0.438) && (y <= window.innerHeight*0.34)) ||
              ((y <= window.innerHeight*0.3351724137931034) && (x <= window.innerWidth*0.3235677083)) ||
              ((x <= window.innerWidth*0.195) && (y <= window.innerHeight*0.385)) ||
              ((x <= window.innerWidth*0.3561197916) && (y <= window.innerHeight*0.568) && (x >= window.innerWidth*0.29105)) ||
              ((x >= window.innerWidth*0.796) && (y <= window.innerHeight*0.41)) ||
              ((y >= window.innerHeight*0.38) && (x >= window.innerWidth*0.245) && (y <= window.innerHeight*0.568) && (x <= window.innerWidth*0.3561197916))){
                y +=5
            }
        }
        if(ShiftPressed) {
            side = 4
            walk++
            if(walk >= 8){
                if(step >= 5){
                step = 5
                }else{
                    step++
                }
                walk=0
            }
        }
        if(LeftPressed) {
            side = 3
            walk++
            if(walk >= 3){
                step++
                walk=0
            }
            if(step >= 9){
                step = 1
            }
            x -= 5;
            if((x <= window.innerWidth*0.125) ||
              ((x <= window.innerWidth*0.335) && (y >= window.innerHeight*0.67) && (x >= window.innerWidth*0.291015625)) ||
              ((x <= window.innerWidth*0.26171875) && (y >= window.innerHeight*0.76)) ||
              ((x <= window.innerWidth*0.16) && (y >= window.innerHeight*0.69)) ||
              ((y >= window.innerHeight*0.6) && (x <= window.innerWidth*0.4537760416) && (x >= window.innerWidth*0.374) && (y <= window.innerHeight*0.775)) ||
              ((y <= window.innerHeight*0.635) && (x >= window.innerWidth*0.52) && (y >= window.innerHeight*0.4868965517241379) && (x <= window.innerWidth*0.667)) ||
              ((x >= window.innerWidth*0.543) && (y <= window.innerHeight*0.7558620689655172) && (x <= window.innerWidth*0.6355) && (y >= window.innerHeight*0.4868965517241379)) ||
              ((x >= window.innerWidth*0.54) && (y >= window.innerHeight*0.86) && (x <= window.innerWidth*0.649)) ||
              ((x <= window.innerWidth*0.195) && (y <= window.innerHeight*0.385)) ||
              ((x <= window.innerWidth*0.3561197916) && (y <= window.innerHeight*0.568) && (x >= window.innerWidth*0.29105))) {
                x += 5;
            }
        }
        if(RightPressed) {
            side = 2
            walk++
            if(walk >= 3){
                step++
                walk=0
            }
            if(step >= 9){
                step = 1
            }
            x += 5;
            if(((x >= window.innerWidth*0.665) && ( y >= window.innerHeight*0.56)) || 
              (x >= window.innerWidth*0.875) || 
              ((y <= window.innerHeight*0.38714991762) && (x >= window.innerWidth*0.67)) ||
              ((y >= window.innerHeight*0.67) && (x >= window.innerWidth*0.291015625) && (x <= window.innerWidth*0.335)) ||
              ((y >= window.innerHeight*0.6) && (x <= window.innerWidth*0.4537760416) && (x >= window.innerWidth*0.374) && (y <= window.innerHeight*0.775)) ||
              ((y <= window.innerHeight*0.635) && (x >= window.innerWidth*0.52) && (y >= window.innerHeight*0.4868965517241379) && (x <= window.innerWidth*0.667)) ||
              ((x >= window.innerWidth*0.543) && (y <= window.innerHeight*0.7558620689655172) && (x <= window.innerWidth*0.6355) && (y >= window.innerHeight*0.4868965517241379)) ||
              ((x >= window.innerWidth*0.54) && (y >= window.innerHeight*0.86) && (x <= window.innerWidth*0.649)) ||
              ((x >= window.innerWidth*0.438) && (y <= window.innerHeight*0.34)) ||
              ((x <= window.innerWidth*0.3561197916) && (y <= window.innerHeight*0.568) && (x >= window.innerWidth*0.29105)) ||
              ((x >= window.innerWidth*0.828125)) ||
              ((x >= window.innerWidth*0.796) && (y <= window.innerHeight*0.41)) ||
              ((x >= window.innerWidth*0.72) && (y >= window.innerHeight*0.53)) ||
              ((y >= window.innerHeight*0.38) && (x >= window.innerWidth*0.245) && (y <= window.innerHeight*0.568) && (x <= window.innerWidth*0.3561197916))) {

                x -= 5;
            }
        }

        setTimeout(function(){
            if((x >= window.innerWidth*0.5227864583333333) && (y >= window.innerHeight*0.4524137931034483) && (x <= window.innerWidth*0.6627604166666667) && (y <= window.innerHeight*0.583448275862069)){
                Room.style.backgroundImage = 'url("front/image/MeublesTransp/canapeTranspa.png")'
            }
            //Test si je suis derrière la plante
            else if((x >= window.innerWidth*0.2428385416666667) && (y <= window.innerHeight*0.376551724137931) && (x <= window.innerWidth*0.30)){
                Room.style.backgroundImage = 'url("front/image/MeublesTransp/planteTranspa.png")'
            }
            //Test si je suis derrière la télé
            else if ((x >= window.innerWidth * 0.548828125) && (y >= window.innerHeight * 0.7972413793103448) && (x <= window.innerWidth * 0.6497395833333333)) {
                Room.style.backgroundImage = 'url("front/image/MeublesTransp/teleTranspa.png")'
            }
            //Test si je suis derrière la table de chevet
            else if((x <= window.innerWidth*0.1549479166666667) && (y >= window.innerHeight*0.6248275862068966)){
                Room.style.backgroundImage = 'url("front/image/MeublesTransp/tableChevetTranspa.png")'
            }
            //Test si je suis derrière meuble d'entrée'
            else if ((x >= window.innerWidth * 0.7213541666666667) && (y >= window.innerHeight * 0.485)){ 
                Room.style.backgroundImage = 'url("front/image/MeublesTransp/entreeTranspa.png")'
            }
            else {
                Room.style.backgroundImage = 'url("front/image/room.png")'
            }
        },1200)

        //Test si je suis devant l'odinateur
        if((x>=window.innerWidth*0.195) && (x<=window.innerWidth*0.22) && (y<=window.innerHeight*0.38)){
            inComputer = true
        }
        else{
            inComputer = false
        }
        
        //Affiche la description de l'ordi
        if(inComputer){
            ClickBureau.style.display = "block"
        }
        else{
            ClickBureau.style.display = "none"
        }

        //Test si je suis devant la table
        if((x >= window.innerWidth*0.32421875) && (y <= window.innerHeight*0.5144827586206897) && (x <=window.innerWidth*0.373046875) && (y >= window.innerHeight*0.4110344827586207)){
            inTable = true
        }
        else{
            inTable = false
        }

        //Affiche la description de la table
        if(inTable){
            ClickTable.style.display = "block"
        }
        else{
            ClickTable.style.display = "none"
        }

        //Test si je suis devant la TV
        if((x >= window.innerWidth*0.545) && (y >= window.innerHeight*0.8041379310344828) && (x <= window.innerWidth*0.6432291666666667)){
            inTV = true
        }
        else{
            inTV = false
        }

         //Affiche la description de la TV
         if(inTV){
            ClickTV.style.display = "block"
        }
        else{
            ClickTV.style.display = "none"
        }


        //Test si je suis devant le Frigo
        if ((x >= window.innerWidth * 0.63) && (y <= window.innerHeight * 0.3627586206896552)) {
            inFrigo = true
        }
        else {
            inFrigo = false
        }

        //Affiche la description du Frigo
        if (inFrigo) {
            ClickFrigo.style.display = "block"
        }
        else {
            ClickFrigo.style.display = "none"
        }

         //Test si je suis devant la Lettre
         if ((x >= window.innerWidth*0.7506510416666667) && (y >= window.innerHeight*0.4662068965517241)) {
            inLettre = true
        }
        else {
            inLettre = false
        }

        //Affiche la description de la Lettre
        if (inLettre) {
            ClickLettre.style.display = "block"
        }
        else {
            ClickLettre.style.display = "none"
        } 
    }   
}

let popup1 = document.querySelector('.pop1')
popup1.style.display = "none"
let popup2 = document.querySelector('.pop2')
popup2.style.display = "none"
let popup3 = document.querySelector('.pop3')
popup3.style.display = "none"
let popup4 = document.querySelector('.pop4')
popup4.style.display = "none"

var popupmarche = false;

function affichpop() {
    if(popupmarche == true){
        numpop = Math.floor(Math.random()*(4-1+1))+1;
        if(numpop == 1){
            popup1.style.display = "block"
        }
        else if(numpop == 2){
            popup2.style.display = "block"
        }
        else if(numpop == 3){
            popup3.style.display = "block"
        }
        else if(numpop == 4){
            popup4.style.display = "block"
        }
    }
}

//Icon wifi qui ouvre et qui ferme la page de connection
let iconwifi = false

$(document).ready(function() {
    
    setInterval(updatePersonnage, 25);

    setInterval(affichpop, 25000)

    $(ClickBureau).click(function(){
        FondBureau.style.display = "block"
        Room.style.display = "none"
        inRoom = false
    })

    $(ClickTV).click(function(){
        FondTele.style.display = "block"
        Room.style.display = "none"
        inRoom = false
    })

    $(ClickFrigo).click(function(){
        FondFrigo.style.display = "block"
        Room.style.display = "none"
        inRoom = false
    })

    $(ClickTable).click(function(){
        FondTable.style.display = "block"
        Room.style.display = "none"
        inRoom = false
    })

    $(ClickTable).click(function(){
        FondTable.style.display = "block"
        Room.style.display = "none"
        inRoom = false
    })

    $(ClickLettre).click(function(){
        document.querySelector("#lettre").style.display = "block"
        inRoom = false
    })


    $(ClickPC).click(function() {
        if(PC_is_lock){
            PClock.style.display = "block"
            FondPC.style.display = "block"
            FondBureau.style.display = "none"
            socket.emit('whichMission',(1))
            socket.emit('EnvoyeDialogue', 4, 2500)
        }
        else{
            FondBureau.style.display = "none"
            PC.style.display = "block"
            FondPC.style.display = "block"
        }
    })

    $('.clickBox').click(function(){
        document.querySelector('.mdpBox').style.display = "block"
        if($('.BLFauxRom').parent().hasClass('code')){
        }else{
            
            let Titre = document.createElement("h2")
            let code = document.createElement("p")
            Titre.innerHTML = "Wifi"
            code.innerHTML = "yvFofzUgoF15QxJnojuJ"
            let div = document.createElement("div")
            div.appendChild(Titre)
            div.appendChild(code)
            document.querySelector('.ListeMdp').appendChild(div)
            let FauxRomBL = $('.BLFauxRom').parent()
            FauxRomBL.addClass('code')
        }
    })

    $('.clickMdpPC').click(function(){
        document.querySelector('.mdpPC').style.display = "block"
        document.querySelector('.BLPC').innerHTML = "J3su1sl3bo0sS"
    })

    $('.clickPost-itJunia').click(function(){
        document.querySelector('.mdpFrigoJunia').style.display = "block"
        document.querySelector('.BLFaceJunia').innerHTML = "mdpn1234"
    })

    $('.clickPost-itInsta').click(function(){
        document.querySelector('.mdpTableInsta').style.display = "block"
        document.querySelector('.BLInstaGroove').innerHTML = "202220212020"
    })

    $('.clickLivre').click(function(){
        document.querySelector('.tableauMdp').style.display = "block"
        socket.emit('EnvoyeDialogue', 9, 1500)
    })



    $(".ComeBackBureau").click(function(){
        PC.style.display = "none"
        PClock.style.display = "none"
        FondPC.style.display = "none"
        FondBureau.style.display = "block"
    })

    $(".ComeBackRoom").click(function(){
        let va = $(this).attr('rel')
        $('#' + va)[0].style.display = "none"
        Room.style.display = "block"
        inRoom = true
    })

    $('#PCpassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == "J3su1sl3bo0sS")){
            PClock.style.display = "none"
            PC.style.display = "block"
            PC_is_lock = false
            popupmarche = true
            $('.pop1').click(function (){
                popup1.style.display = "none"
            })
            $('.pop2').click(function (){
                popup2.style.display = "none"
            })
            $('.pop3').click(function (){
                popup3.style.display = "none"
            })
            $('.pop4').click(function (){
                popup4.style.display = "none"
            })
            socket.emit('whichMission',(2))
            socket.emit('EnvoyeDialogue', 6, 7000)
		}
    }

    
    $('.wifiicon').click(function(){

        if(iconwifi){
            document.querySelector(".parametreWifi").style.display = "block"
            iconwifi = false
            socket.emit('EnvoyeDialogue', 13, 1500)
        }else{
            document.querySelector(".parametreWifi").style.display = "none"
            iconwifi = true
        }
    })

    $(".connectReseau").click(function(){
        console.log('yo')
        if(document.querySelector("#BonWifi").value == "yvFofzUgoF15QxJnojuJ"){
            popupmarche = false;
            document.querySelector(".mcWifi").innerHTML  = "Non Connecté"
            document.querySelector(".PasmcWifi").innerHTML  = "Connecté"
            document.querySelector("#BonWifi").parentNode.removeChild(document.querySelector("#BonWifi"))
            document.querySelector(".connectReseau").parentNode.removeChild(document.querySelector(".connectReseau"))
            socket.emit('whichMission',(7))
            socket.emit('EnvoyeDialogue', 18, 10000)
        }

    })
})
