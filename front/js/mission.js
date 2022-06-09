//Compteur pour l'afficheur de mission
let MissionCout = 0

//Test mission FaceJunia
let FaceJunia_mission_1 = false
let FaceJunia_mission_2 = false
let FaceJunia_mission_3 = false

//Test mission Faux-Rom
let FauxRom_mission_1 = false
let FauxRom_mission_2 = false
let FauxRom_mission_3 = false

//Test mission Instagroove
let InstaGroove_mission_1 = false
let InstaGroove_mission_2 = false
let InstaGroove_mission_3 = false

//Test mission Imail
let Imail_mission_1 = false
let Imail_mission_2 = false
let Imail_mission_3 = false

//Confirmation MDP FaceJunia
$('.ConfirmerMdpFaceJunia').click(function (){
    var oldpassword = document.getElementById('oldPassword').value;
    var newpassword = document.getElementById('newPassword').value;
    var confirmpassword = document.getElementById('confirmPassword').value;
    if (oldpassword == "" || newpassword == "" || confirmpassword == "") {
        alert('Veuillez remplir tous les champs');
    }
    else if (oldpassword == newpassword) {
        alert("L'ancien et le nouveau mot de passe ne peuvent être identique");
    }
    else if (newpassword != confirmpassword) {
        alert("Les mots de passe ne correspondent pas");
    }
    else {
        if ((newpassword.match( /[0-9]/g) && 
                newpassword.match( /[A-Z]/g) && 
                newpassword.match(/[a-z]/g) && 
                newpassword.match( /[^a-zA-Z\d]/g) &&
                newpassword.length == 9) || (newpassword.match(/[a-z]/g) && newpassword.length == 12)) {
            msg = "<p style='color:green'>Mot de passe fort.</p>"; 
            document.querySelector('.bigboxFaceJunia_changeMdp').style.display = "none";
            document.querySelector('.bigboxFaceJunia_para').style.display = "block";
            alert("Le mot de passe a été correctement modifié")
            FaceJunia_mission_1 = true
            socket.emit('newMdp',newpassword, 0)
            document.querySelector(".BLFaceJunia").innerHTML = newpassword
            if((FaceJunia_mission_1 == true) && (FaceJunia_mission_2 == true) && (FaceJunia_mission_3 == true)){
                socket.emit('whichMission',(4))
                console.log("FaceJunia Fini")
                socket.emit('EnvoyeDialogue', 17, 1500)
                document.querySelector(".BLFauxRom").innerHTML = "aknjshu"
            }
        }
        else {
            msg = "<p style='color:red'>Mot de passe faible.</p>";
            socket.emit('EnvoyeDialogue', 8, 1500)
        }
        document.getElementById("msg").innerHTML= msg; 
    }
})

//Confirmation Info FaceJunia
$('.ConfirmerInfoFaceJunia').click(function (){

    let statueaffectif = document.getElementById('StatueAffectif').value;
    let statueaffectifstate = document.getElementById('StatueAffectifState').value;
    document.getElementById('co').innerHTML = statueaffectif + " ( " +statueaffectifstate + " )"; 

    let ecole = document.getElementById('ecoleinfo').value
    let ecolestate = document.getElementById('ecolestate').value
    document.getElementById('etu').innerHTML = ecole + " ( " + ecolestate + " )"; 

    let habitat = document.getElementById('habitatinfo').value
    let habitatstate = document.getElementById('habitatstate').value
    document.getElementById('hab').innerHTML = habitat + " ( " + habitatstate + " )"; 

    let telephone = document.getElementById('telinfo').value
    let telephonestate = document.getElementById('telstate').value
    document.getElementById('tel').innerHTML = telephone + " ( " + telephonestate + " )"; 


    alert("Changement correctement effectué ! ")
    FaceJuniascreen_changeInfo.style.display = "none"
    FaceJuniascreen_Para.style.display = "block"

    if((habitat == "JuniaCity")||(habitat == "Juniacity")){
        FaceJunia_mission_2 = true
    }

    if(statueaffectifstate && ecolestate && habitatstate && telephonestate == "prive"){
        FaceJunia_mission_3 = true
    }

    if((FaceJunia_mission_1 == true) && (FaceJunia_mission_2 == true) && (FaceJunia_mission_3 == true)){
        socket.emit('whichMission',(4))
        console.log("FaceJunia Fini")
        socket.emit('EnvoyeDialogue', 17, 1500)
        document.querySelector(".BLFauxRom").innerHTML = "aknjshu"
    }
})

//Confirmation MDP FauxRom
$('.ConfirmerMdpFaux-Rom').click(function (){
        
    var oldpassword = document.getElementById('oldPasswordFaux-Rom').value;
    var newpassword = document.getElementById('newPasswordFaux-Rom').value;
    var confirmpassword = document.getElementById('confirmPasswordFaux-Rom').value;
    if (oldpassword == "" || newpassword == "" || confirmpassword == "") {
        alert('Veuillez remplir tous les champs');
    }
    else if (oldpassword == newpassword) {
        alert("L'ancien et le nouveau mot de passe ne peuvent être identique");
    }
    else if (newpassword != confirmpassword) {
        alert("Les mots de passe ne correspondent pas");
    }
    else {
        if ((newpassword.match( /[0-9]/g) && newpassword.match( /[A-Z]/g) && newpassword.match(/[a-z]/g) && newpassword.match( /[^a-zA-Z\d]/g) && newpassword.length == 10) || (newpassword.match(/[a-z]/g) && newpassword.match( /[A-Z]/g) && newpassword.length == 11)) {
            msg = "<p style='color:green'>Votre mot de passe fort, il resiste 5 ans !</p>"; 
            document.querySelector(".bigboxFaux-Rom_changeMdp").style.display = "none";
            document.querySelector(".bigboxFaux-Rom_para").style.display = "block";
            alert("Le mot de passe a été correctement modifié")
            FauxRom_mission_1 = true
            socket.emit('newMdp',newpassword, 1)
            socket.emit('EnvoyeDialogue', 11, 1500)
            document.querySelector(".BLFauxRom").innerHTML = newpassword
            if((FauxRom_mission_1 == true) && (FauxRom_mission_2 == true) && (FauxRom_mission_3 == true)){
                socket.emit('whichMission',(6))
                console.log("FauxRom Fini")
            }
        }
        else {
            msg = "<p style='color:red'>Mot de passe trop faible pour ce niveau.</p>";
            socket.emit('EnvoyeDialogue', 10, 1500)
        }
        document.getElementById("msgFaux-Rom").innerHTML= msg; 
    }
})

//Confirmation Info Faux-Rom
$('.ConfirmerInfoFauxRom').click(function (){

    let Desc = document.getElementById('descvalue')
    let pseudo = document.getElementById('pseudoinfo').value;
    document.getElementById('pseudovalue').innerHTML = "Pseudo : " + pseudo

    let desc = document.getElementById('descinfo').value;
    Desc.innerHTML = "Description : "+ desc

    alert("Les informations ont été enregistrés, vous êtes désormais connectés.")

    if(Desc.textContent.includes("soeur de 16 ans") || Desc.textContent.includes("Mathilde") || Desc.textContent.includes("parents") || Desc.textContent.includes("Tesla")){}
    else{
        FauxRom_mission_2 = true
        if((FauxRom_mission_1 == true) && (FauxRom_mission_2 == true) && (FauxRom_mission_3 == true)){
            socket.emit('whichMission',(6))
            console.log("FauxRom Fini")
        }
    }

})

$('.EnvoieReponseFauxRom').click(function (){
    console.log("yo")
    let message = document.createElement('div')
    let reponse = document.querySelector("#reponseBastiens").value
    let discution = document.querySelector(".discutionBastiens")

    message.innerHTML = reponse
    discution.appendChild(message)

    if((message.textContent.includes("qwant")) || ((message.textContent.includes("Qwant")))){
        FauxRom_mission_3 = true
        if((FauxRom_mission_1 == true) && (FauxRom_mission_2 == true) && (FauxRom_mission_3 == true)){
            socket.emit('whichMission',(6))
            console.log("FauxRom Fini")
        }
    }
})

//Confirmation MDP InstaGroove
$('.ConfirmerMdpInstaGroove').click(function (){
        
    var oldpassword = document.getElementById('oldPasswordInstaGroove').value;
    var newpassword = document.getElementById('newPasswordInstaGroove').value;
    var confirmpassword = document.getElementById('confirmPasswordInstaGroove').value;
    if (oldpassword == "" || newpassword == "" || confirmpassword == "") {
        alert('Veuillez remplir tous les champs');
    }
    else if (oldpassword == newpassword) {
        alert("L'ancien et le nouveau mot de passe ne peuvent être identique");
    }
    else if (newpassword != confirmpassword) {
        alert("Les mots de passe ne correspondent pas");
    }
    else {
        if ((newpassword.match(/[a-z]/g) && newpassword.length == 17) || (newpassword.match(/[a-z]/g) && newpassword.match( /[A-Z]/g) && newpassword.length == 14)) {
            msg = "<p style='color:green'>Votre mot de passe fort, il resiste 800 000 ans !</p>"; 
            document.querySelector(".bigboxInstaGroove_changeMdp").style.display = "none";
            document.querySelector(".bigboxInstaGroove_para").style.display = "block";
            alert("Le mot de passe a été correctement modifié");
            InstaGroove_mission_1 = true;
            console.log(InstaGroove_mission_1)
            socket.emit('newMdp',newpassword, 2)
            document.querySelector(".BLInstaGroove").innerHTML = newpassword
            if((InstaGroove_mission_1 == true) && (InstaGroove_mission_2 == true) && (InstaGroove_mission_3 == true)){
                socket.emit('whichMission', (9))
                console.log("InstaGroove Fini")
                socket.emit('EnvoyeDialogue', 19, 1500)
            }
        }
        else {
            msg = "<p style='color:red'>Mot de passe trop faible pour ce niveau.</p>";
            socket.emit('EnvoyeDialogue', 14, 1500)
        }
        document.getElementById("msgInstaGroove").innerHTML= msg; 
    }
})

//Confirmation Info InstaGroove

$('.ConfirmerInfoInstaGroove').click(function () {

    let newpseudoInstaGroove = document.getElementById('pseudoinfoInstaGroove').value
    document.querySelector('.pseudoInstaGroovechange').innerHTML = newpseudoInstaGroove;

    let newlocaInstaGroove = document.getElementById('locainfoInstaGroove').value
    document.querySelector('.locInstaGroovechange').innerHTML = newlocaInstaGroove;

    let newstatueInstaGroove = document.getElementById('statueinfoInstaGroove').value
    document.querySelector('.statutInstaGroovechange').innerHTML = newstatueInstaGroove;
    alert("Vos données ont été correctement sauvegardés.")
    InstaGroovescreen_Para.style.display = "none";
    InstaGroovescreenOpen.style.display = "block";

    // replocaInstaGroove = document.querySelector('.locInstaGroovechange');
    replocaInstaGroove = document.querySelector('.locainfoInstaGroove');

    if(replocaInstaGroove = "Non"){
        InstaGroove_mission_2 = true;        
        console.log(InstaGroove_mission_2)
    }
    if((InstaGroove_mission_1 == true) && (InstaGroove_mission_2 == true) && (InstaGroove_mission_3 == true)){
        socket.emit('whichMission', (9))
        console.log("InstaGroove Fini")
        socket.emit('EnvoyeDialogue', 19, 1500)
    }

})

//Supprimer GENS
$(".poubelle4").click(function(){

    let spam1 = document.querySelector('.nom4');
    spam1.style.display = "none";
    InstaGroove_mission_3 = true;
    console.log(InstaGroove_mission_3)
    if((InstaGroove_mission_1 == true) && (InstaGroove_mission_2 == true) && (InstaGroove_mission_3 == true)){
        socket.emit('whichMission', (9))
        console.log("InstaGroove Fini")
        socket.emit('EnvoyeDialogue', 19, 1500)
    }
})



//Tu te fais voler de l'argent
$('.EnvoieReponseFauxRom').click(function (){
    let message = document.createElement('div')
    let reponse = document.querySelector("#reponseBastiens").value
    let discution = document.querySelector(".discutionBastiens")

    message.innerHTML = reponse
    discution.appendChild(message)

    if((message.textContent.includes("qwant")) || ((message.textContent.includes("Qwant")))){
        FauxRom_mission_3 = true
        if((FauxRom_mission_1 == true) && (FauxRom_mission_2 == true) && (FauxRom_mission_3 == true)){
            socket.emit('whichMission',(6))
            console.log("FauxRom Fini")
        }
    }

})

// //Confirmation payement Imail
// $('.envoyecashVrai').click(function(){
//     if(document.querySelector("#CodeCarte").value == 1209){
//         Imail_mission_2 = true;
//         if((Imail_mission_1 == true) && (Imail_mission_2 == true) && (Imail_mission_3 == true)){
//             socket.emit('whichMission',(11))
//             console.log("Imail Fini")
//         }
//     }
//     else{
//         document.querySelector("#CodeCarte").value = ""
//         document.querySelector("#CodeCarte").placeholder = "Ce n'est pas le Code"
//     }
// })

$('.clickMe2').click(function (){
    Imail_mission_2 = true;
    if((Imail_mission_1 == true) && (Imail_mission_2 == true) && (Imail_mission_3 == true)){
        socket.emit('whichMission',(11))
        console.log("Imail Fini")
    }
    console.log(Imail_mission_2)
})

//vérifie si on a supprimé tous les mails
function verifSuppSpam(){
    let MainPage = document.querySelector(".allmessageImail")
    let CBon = true
    for(let i = 0; i <= MainPage.childElementCount-1; i++){
        if(MainPage.children[i].childNodes[5].textContent.includes("spam") == true){
            CBon = false
        }
    }
    if(CBon){
        Imail_mission_3 = true
        if((Imail_mission_1 == true) && (Imail_mission_2 == true) && (Imail_mission_3 == true)){
            socket.emit('whichMission', (11))
            console.log("Imail Fini")
        }
        console.log(Imail_mission_3)
    }
    else{
        console.log("Pas encore")
    }
}

//Fonction qui change selection les Imails
var ImailSelect = []
$('.clickImail').click(function(e){
    if($(this).hasClass("fa-square-o")){
        $(this).removeClass("fa-square-o").addClass("fa-square-check")
        $(this).parent()[0].style.backgroundColor = "lightgray"
        $(this)[0].style.color = "black"
        ImailSelect.push($(this).parent()[0])
    }
    else{
        $(this).removeClass("fa-square-check").addClass("fa-square-o")
        $(this).parent()[0].style.backgroundColor = ""
        $(this)[0].style.color = "gray"
        ImailSelect.splice($.inArray($(this).parent()[0],ImailSelect) , 1)
    }
    if(ImailSelect.length == 0){
        document.querySelector('#bigtrash').style.display = "none"
    }
    else{
        document.querySelector('#bigtrash').style.display = "block"
    }
    e.stopPropagation();
})

//Supprime tout les mails séléctionné
$('#bigtrash').click(function(){
    for(let i = 0; i < ImailSelect.length; i++){
        ImailSelect[i].parentNode.removeChild(ImailSelect[i])
    }
    ImailSelect = [];
    verifSuppSpam();
})

//Supprime un mail
$('.iconImail').click(function(e){
    let SuppPage = document.querySelector(".allImailSupprimer")
    SuppPage.appendChild($(this).parent()[0])
    verifSuppSpam()
    e.stopPropagation();
})

//Confirme MDP Imail
$('.ConfirmerMdpImail').click(function (){
        
    var oldpassword = document.getElementById('oldPasswordImail').value;
    var newpassword = document.getElementById('newPasswordImail').value;
    var confirmpassword = document.getElementById('confirmPasswordImail').value;
    if (oldpassword == "" || newpassword == "" || confirmpassword == "") {
        alert('Veuillez remplir tous les champs');
    }
    else if (oldpassword == newpassword) {
        alert("L'ancien et le nouveau mot de passe ne peuvent être identique");
    }
    else if (newpassword != confirmpassword) {
        alert("Les mots de passe ne correspondent pas");
    }
    else {
        if (newpassword.match( /[0-9]/g) && newpassword.match( /[A-Z]/g) && newpassword.match(/[a-z]/g) && newpassword.match( /[^a-zA-Z\d]/g) && newpassword.length == 18){
            msg = "<p style='color:green'>Votre mot de passe fort, il resiste à n'importe quel attaque !</p>"; 
            document.querySelector(".bigboxImail").style.display = "none";
            document.querySelector(".bigboxlockImail").style.display = "block";
            document.querySelector('.mdp_Imail').style.visibility = 'hidden',
            alert("Le mot de passe a été correctement modifié")
            socket.emit('newMdp',newpassword, 3)
            document.querySelector(".BLImail").innerHTML = newpassword
            Imail_mission_1 = true;
            
            if((Imail_mission_1 == true) && (Imail_mission_2 == true) && (Imail_mission_3 == true)){
            
                socket.emit('whichMission',(11))
                console.log("Imail Fini")
            }
            console.log(Imail_mission_1)
        }
        else {
            msg = "<p style='color:red'>Mot de passe trop faible pour ce niveau.</p>";
            socket.emit('EnvoyeDialogue', 15, 1500)
        }
        document.getElementById("msgFaux-Rom").innerHTML= msg; 
    }
})

socket.on('thisMission', (nb) => {
    if (MissionCout < nb){
        MissionCout = nb
        if (MissionCout == 3){
            socket.emit('EnvoyeDialogue', 7, 1500)
        }else if(MissionCout == 8){
            socket.emit('EnvoyeDialogue', 12, 1500)
        }
    }
    
});


$('.clickMission').click(function (){

    let listeMission = document.getElementById('listeMission')
    let TitreMission = document.querySelector('#TitreMission')

    while(listeMission.firstChild){
        listeMission.removeChild(listeMission.lastChild)
    }
    switch(MissionCout){
        //CHAMBRE
        case 0:
            //On arrive
            var li = document.createElement('li');
            li.innerHTML = "Explore la chambre";
            listeMission.appendChild(li);
            
            break;
        case 1:
            //On trouve l'ordi
            var li = document.createElement('li');
            li.innerHTML = "Trouve et rentre le mot de passe de l'ordi";
            listeMission.appendChild(li);
            
            break;
        case 2:
            //FACEJUNIA
            //On arrive sur le menu du Pc
            
            TitreMission.innerHTML = "FaceJunia"
            var li = document.createElement('li');
            li.innerHTML = "Trouve le mot de passe de FaceJunia";
            listeMission.appendChild(li);
            break;
        case 3:
            //On est sur FaceJunia
            TitreMission.innerHTML = "FaceJunia"
            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');
            li1.innerHTML = "Mets un nouveau mot de passe qui résiste pendant 3 semaine";
            li2.innerHTML = "Mets toutes tes données en privé";
            li3.innerHTML = "Mets le nom de ta nouvelle ville";
            listeMission.appendChild(li1);
            listeMission.appendChild(li2);
            listeMission.appendChild(li3);
            break;
        
        case 4:
            //FAUX-ROM
            TitreMission.innerHTML = "Faux-Rom"
            var li = document.createElement('li');
            li.innerHTML = "Ouvrir Faux-Rom";
            listeMission.appendChild(li);
            break;
        case 5:
            //FAUX-ROM
            TitreMission.innerHTML = "Faux-Rom"
            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');
            li1.innerHTML = "Mettre un nouveau mot de passe qui résiste pendant 5 ans";
            li2.innerHTML = "Enleve tout ce qui parle de ta famille";
            li3.innerHTML = "Réponds à Bastiens";
            listeMission.appendChild(li1);
            listeMission.appendChild(li2);
            listeMission.appendChild(li3);
            break;

        case 6:
            var li = document.createElement('li');
            li.innerHTML = "Enleve les pops ups";
            listeMission.appendChild(li);
            document.querySelector('.wifiicon').style.display = 'block'
            break;
        
        case 7:
            //Ouvrir InstaGroove
            TitreMission.innerHTML = "InstaGroove"
            var li = document.createElement('li');
            li.innerHTML = "Ouvrir InstaGroove";
            listeMission.appendChild(li);
            document.querySelector('.clickPost-itInsta').style.display = 'block'
            break;

        case 8:
            //INSTAGROOVE
            TitreMission.innerHTML = "Instagroove"
            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');
            li1.innerHTML = "Mettre un nouveau mot de passe qui résiste pendant 800k ans";
            li2.innerHTML = "Désactive ta localisation";
            li3.innerHTML = "Supprime les bots qui t'envois des messages ";
            listeMission.appendChild(li1);
            listeMission.appendChild(li2);
            listeMission.appendChild(li3);
            break;

        case 9:
            //Ouvrir IMAIL
            TitreMission.innerHTML = "Imail"
            var li = document.createElement('li');
            li.innerHTML = "Ouvrir Imail";
            listeMission.appendChild(li);
            document.querySelector(".BLImail").innerHTML = "cR0u$" 
            break;

        case 10:
            //IMail
            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');
            li1.innerHTML = "Mettre un nouveau mot de passe qui résiste infiniment";
            li2.innerHTML = "Payer le cadeau à de ta grand mère";
            li3.innerHTML = "Supprime les mails bizarres";
            listeMission.appendChild(li1);
            listeMission.appendChild(li2);
            listeMission.appendChild(li3);
            break;
        case 11:
            socket.emit('EnvoyeDialogue', 20, 1500)
            break;
    }  
});

// $(document).ready(function() {

    
// });

