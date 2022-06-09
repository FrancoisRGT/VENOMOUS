let PCscreen = document.querySelector('#PC')


let FaceJuniascreen = document.querySelector('#FaceJunia')
let FaceJuniascreenClose = document.querySelector('.bigboxlockFaceJunia')
let FaceJuniascreenOpen = document.querySelector('.bigboxFaceJunia')
let FaceJuniascreen_Para = document.querySelector('.bigboxFaceJunia_para')
let FaceJuniascreen_changeMdp = document.querySelector('.bigboxFaceJunia_changeMdp')
let FaceJuniascreen_changeInfo = document.querySelector('.bigboxFaceJunia_changeInfo')

let InstaGroovescreen = document.querySelector('#InstaGroove')
let InstaGroovescreenClose = document.querySelector('.bigboxLockInstaGroove')
let InstaGroovescreenOpen = document.querySelector('.bigboxInstaGroove')
let InstaGroovescreen_Para = document.querySelector('.bigboxInstaGroove_para')
let InstaGroovescreen_changeMdp = document.querySelector('.bigboxInstaGroove_changeMdp')
let InstaGroovescreen_mess = document.querySelector('.bigboxInstaGroove_mess')

let Imailscreen = document.querySelector('#Imail')
let ImailscreenClose = document.querySelector('.bigboxlockImail')
let ImailscreenOpen = document.querySelector('.bigboxImail')
let Imailscreen_changeMdp = document.querySelector('.mdp_Imail')

let FauxRomscreen = document.querySelector('#Faux-Rom')
let FauxRomscreenClose = document.querySelector('.bigboxlockFaux-Rom')
let FauxRomscreenOpen = document.querySelector('.bigboxFaux-Rom')
let FauxRomscreen_Para = document.querySelector('.bigboxFaux-Rom_para')
let FauxRomscreen_changeMdp = document.querySelector('.bigboxFaux-Rom_changeMdp')
let FauxRomscreen_reponseBastiens = document.querySelector('.bigboxFaux-Rom_reponseBastiens')

let FaceJunia_is_lock = true
let InstaGroove_is_lock = true
let Imail_is_lock = true
let FauxRom_is_lock = true

let Mission = document.querySelector(".mission")
let BlocNote = document.querySelector(".blockNote")
Mission.style.display = "none"
BlocNote.style.display = "none"


PCscreen.style.display = "none"
FaceJuniascreen.style.display = "none"
FaceJuniascreenClose.style.display = "none"
FaceJuniascreenOpen.style.display = "none"
FaceJuniascreen_Para.style.display = "none"
FaceJuniascreen_changeMdp.style.display = "none"
FaceJuniascreen_changeInfo.style.display = "none"

InstaGroovescreen.style.display = "none"
InstaGroovescreenClose.style.display = "none"
InstaGroovescreenOpen.style.display = "none"
InstaGroovescreen_Para.style.display = "none"
InstaGroovescreen_changeMdp.style.display = "none"
InstaGroovescreen_mess.style.display = "none"

Imailscreen.style.display = "none"
ImailscreenClose.style.display = "none"
ImailscreenOpen.style.display = "none"

FauxRomscreen.style.display = "none"
FauxRomscreenClose.style.display = "none"
FauxRomscreenOpen.style.display = "none"
FauxRomscreen_Para.style.display = "none"
FauxRomscreen_changeMdp.style.display = "none"
FauxRomscreen_reponseBastiens.style.display = "none"

let motdepasseFaceJunia = "mdpn1234"
let motdepasseInstaGroove = "202220212020"
let motdepasseImail = "cR0u$"
let motdepasseFauxRom = "aknjshu"

socket.on('addNewMDP',({newpassword, site}) =>{
    console.log(newpassword)
    switch(site){
        case 0:
            motdepasseFaceJunia = newpassword
            break;
        case 1:
            motdepasseFauxRom = newpassword
            break;
        case 2:
            motdepasseInstagroove = newpassword
            break;
        case 3:
            motdepasseImail = newpassword
            break;
    }
})

$(document).ready(function() {

    $('.Icon').click(function(){
        PCscreen.style.display = "none"
        let va = $(this).attr('rel')
        switch(va){
            case "FaceJunia":
                FaceJuniascreen.style.display = "block"
                if(FaceJunia_is_lock){
                $('.bigboxlock' + va)[0].style.display = "block"
                }
                else{
                    $('.bigbox' + va)[0].style.display = "block"
                }
                break;
            
            case "InstaGroove":
                InstaGroovescreen.style.display = "block"
                if(InstaGroove_is_lock){
                $('.bigboxLock' + va)[0].style.display = "block"
                }
                else{
                    $('.bigbox' + va)[0].style.display = "block"
                }
                break;

            case "Imail":
                Imailscreen.style.display = "block"
                if(Imail_is_lock){
                $('.bigboxlock' + va)[0].style.display = "block"
                }
                else{
                    $('.bigbox' + va)[0].style.display = "block"
                }
                break;

            case "Faux-Rom":
                FauxRomscreen.style.display = "block"
                if(FauxRom_is_lock){
                $('.bigboxlock' + va)[0].style.display = "block"
                }
                else{
                    $('.bigbox' + va)[0].style.display = "block"
                }
                break;
        }
        
        
    })

    //Pour revenir a l'écran d'accueil de l'ordi
    $('.goBack').click(function(){ 
        let va = $(this).parent().parent()[0]
        console.log(va.childElementCount)
        for (let i = va.childElementCount-1; i >= 1; i--){
            va.children[i].style.display = "none"
        }
        va.style.display = "none"
        PCscreen.style.display = "block"
    })

    //Test Mots de Passe pour les sites avec le bouton se connnecter
    $(".valide").click(function() {
        let va = $(this).attr('rel')
        console.log(va)
        switch(va){
            case "FaceJuniapassword" :
                if(($('#'+ va)[0].value) == motdepasseFaceJunia){
                    FaceJunia_is_lock = false
                    FaceJuniascreenClose.style.display = "none"
                    FaceJuniascreenOpen.style.display = "block"
                    socket.emit('whichMission',(3))
                }
                break;
            
            case "InstaGroovepassword" :
                if(($('#'+ va)[0].value) == motdepasseInstaGroove){
                    InstaGroove_is_lock = false
                    InstaGroovescreenClose.style.display = "none"
                    InstaGroovescreenOpen.style.display = "block"
                    socket.emit('whichMission',(8))
                }
                break;
            
            case "Imailpassword" :
                if(($('#'+ va)[0].value) == motdepasseImail){
                    Imail_is_lock = false
                    ImailscreenClose.style.display = "none"
                    ImailscreenOpen.style.display = "block"
                    socket.emit('whichMission',(10))
                }
                break;
                
            case "Faux-Rompassword" :
                if(($('#'+ va)[0].value) == motdepasseFauxRom){
                    FauxRom_is_lock = false
                    FauxRomscreenClose.style.display = "none"
                    FauxRomscreenOpen.style.display = "block"
                    socket.emit('whichMission',(5))
                }
                break;
            }
    });

    //Test Mots de Passe pour les sites avec entrée
    $('#FaceJuniapassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == motdepasseFaceJunia)){
            FaceJunia_is_lock = false
            FaceJuniascreenClose.style.display = "none"
            FaceJuniascreenOpen.style.display = "block"
            socket.emit('whichMission',(3))
		}
	}

    $('#InstaGroovepassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == motdepasseInstaGroove)){
            InstaGroove_is_lock = false
            InstaGroovescreenClose.style.display = "none"
            InstaGroovescreenOpen.style.display = "block"
            socket.emit('whichMission',(8))
		}
	}

    $('#Imailpassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == motdepasseImail)){
            Imail_is_lock = false
            ImailscreenClose.style.display = "none"
            ImailscreenOpen.style.display = "block"
            socket.emit('whichMission',(10))
		}
	}

    $('#Faux-Rompassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == motdepasseFauxRom)){
            FauxRom_is_lock = false
            FauxRomscreenClose.style.display = "none"
            FauxRomscreenOpen.style.display = "block"
            socket.emit('whichMission',(5))
		}
	}


    //Parametre FaceJunia//
    $('.reglage').click(function (){
        FaceJuniascreenOpen.style.display = "none"
        FaceJuniascreen_Para.style.display = "block"
    })
    $('.changeMdp').click(function (){
        FaceJuniascreen_Para.style.display = "none"
        FaceJuniascreen_changeMdp.style.display = "block"
    })
    $('.annulerMdp').click(function (){
        FaceJuniascreen_changeMdp.style.display = "none"
        FaceJuniascreen_Para.style.display = "block"
    })
    $('.changeInfo').click(function (){
        FaceJuniascreen_changeInfo.style.display = "block"
        FaceJuniascreen_Para.style.display = "none"
    })
    $('.annulerInfo').click(function (){
        FaceJuniascreen_changeInfo.style.display = "none"
        FaceJuniascreen_Para.style.display = "block"        
    })
    $('.deconnection').click(function (){
        FaceJunia_is_lock = true
        FaceJuniascreen_Para.style.display = "none"
        FaceJuniascreenClose.style.display = "block"
    })
    $('.retourProfil').click(function (){
        FaceJuniascreen_Para.style.display = "none"
        FaceJuniascreenOpen.style.display = "block"
    })

    //Parametrage Faux-Rom// 
    $('.iconereg').click(function (){
        FauxRomscreenOpen.style.display = "none"
        FauxRomscreen_Para.style.display = "block"
    })
    $('.mdpFaux-Rom').click(function (){
        FauxRomscreen_Para.style.display = "none"
        FauxRomscreen_changeMdp.style.display = "block"
    })
    $('.annulerMdpFaux-Rom').click(function (){
        FauxRomscreen_changeMdp.style.display = "none"
        FauxRomscreen_Para.style.display = "block"
    })
    $('.retournerFaux-Rom').click(function (){
        FauxRomscreen_Para.style.display = "none"
        FauxRomscreen_changeMdp.style.display = "none"
        FauxRomscreenOpen.style.display = "block"
    }) 
    
    //Parametrage InstaGroove 

    $('.iconeregInsta').click(function (){
        InstaGroovescreenOpen.style.display = "none"
        InstaGroovescreen_Para.style.display = "block"
    })

    $('.iconemess').click(function (){
        InstaGroovescreenOpen.style.display = "none"
        InstaGroovescreen_mess.style.display = "block"
    })

    $('.retournerInstaGroove').click(function (){
        InstaGroovescreen_Para.style.display = "none"
        InstaGroovescreenOpen.style.display = "block"
    }) 

    $('.mdpInstaGroove').click(function (){
        InstaGroovescreen_Para.style.display = "none"
        InstaGroovescreen_changeMdp.style.display = "block"
    })

    $('.annulerMdpInstaGroove').click(function (){
        InstaGroovescreen_changeMdp.style.display = "none"
        InstaGroovescreen_Para.style.display = "block"
    })

    $('.retourInstaGroove').click(function (){
        InstaGroovescreen_mess.style.display = "none"
        InstaGroovescreenOpen.style.display = "block"
    }) 

    $('.annulerMdpImail').click(function (){
        Imailscreen_changeMdp.style.display = "none"
        ImailscreenOpen.style.display = "block"
    })

    //Fonction pour changer de page
    $('.defile').click(function(){
        //va = div que tu veux masquer
        let va = $(this).parent().parent()[0]
        for(let i = 0; i<va.childElementCount; i++){
            if($(va.children[i]).hasClass("active")){
                $(va.children[i]).removeClass("active")
                $(va.children[i])[0].style.display = "none"
            }
        }
        //page = div que tu veux afficher qui a pour class le rel du truc que tu click
        let page = $(this).attr("rel")
        $('.'+ page)[0].style.display = "block"
        $('.'+ page).addClass("active")
    })

    //Parametre Imail//
    
    //Fonction pour changer de page
    $('.Imail_mainPage').click(function(){
        console.log("je suis là")
        //va = div que tu veux masquer
        let va = $(this).parent().parent()[0]
        //page = div que tu veux afficher qui a pour class le rel du truc que tu click
        let page = $(this).attr("rel")
        va.style.display = "none"
        $('.'+ page)[0].style.display = "block"
    })
    
    $('.backAllImail').click(function(){
        $(this).parent()[0].style.display = "none"
        document.querySelector(".barreDroite").style.display = "block"
    })
    $('.envoyecashFaux').click(function(){
        console.log("tu viens de te faire pirater gros bouffon")
    })

});

