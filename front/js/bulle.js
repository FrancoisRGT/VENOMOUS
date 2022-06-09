let Dialogue = document.querySelector('#dialogue')

let TabDialogue = ["Tu t'appelles Naikte Paco et tu es un etudiant de Venomous, une ecole d'informatique. Cet environnement du virtuel est nouveau pour toi et tu as commis certaines erreurs mettant en danger ton identite numerique, il faut corriger ca.",
"Ton identite numerique constitue tout ce que tu peux laisser paraitre sur internet via tous tes reseaux sociaux, sites internet, forum et tout ce qui touche au numerique.",
"Ici c’est ton appartement : pour te deplacer, tu utiliseras tes fleches et tu pourras interagir avec certains objets en cliquant avec ta souris. Tu as acces a un bloc note ou tu pourras te souvenir plus facilement des mots de passe, ainsi qu’a une liste de tes missions (Regarde la liste assez souvent).",
"Et si on decouvrait cet appart ? Va-t'en explorer tout ca ! ",
"Il semblerait que tu aies besoin de ton mot de passe… Ou tu aurais pu le ranger ? Regarde autour de toi, tu l'as peut-etre note quelque part.",
"Regarde sur ton bureau, il n'y a pas un papier ?",
"Toutes tes applis sont bloquees par des mots de passe…tu ne les aurais pas notes quelque part ? ",
"Ton mot de passe n'est pas assez securise… tu devrais le changer...",
"Le mot de passe que tu proposes ne convient pas… Si tu veux, il y a des documents que ton pere t'a donné ; regarde un peu dans l'appartement.",
"Voila qui est interessant… ce tableau indique combien de temps un hacker mettra pour trouver ton mot de passe… Un mot de passe qui resiste 3 semaines devrait faire l'affaire pour FaceJunia.",
"Le mot de passe que tu proposes n'est pas suffisamment securise… Il faudrait qu'il resiste a au moins 5 ans celui-là… Rappelle-toi tu as des documents si besoin.",
"C’est bien de ne pas utiliser les memes mots de passe partout",
"oula il y a beaucoup d’infos la ! il y en a que tu ne devrais peut-etre pas partager.",
"Le McObese d'à côté ? Pas super securise ça... tu ferais mieux de te connecter a ta box, le mot de passe est dessus.",
"Le mot de passe que tu proposes n’est pas suffisamment securise… Il faudrait qu'il résiste à au moins 800 000 ans celui-la… Rappelle-toi t'as des documents si besoin.",
"Le mot de passe que tu proposes n'est pas suffisamment securise… Il ne doit pas pouvoir se faire hacker lui. Rappelle-toi t'as des documents si besoin.",
"Tu savais que les e-mails etaient polluants ? En fait, un mail represente 4 g d'équivalent CO2 (émissions liees au fonctionnement de l'ordinateur et des serveurs, ainsi qu'a une partie de leur fabrication). 65 mails emettent ainsi autant qu'un kilometre en voiture. Un mail avec une pièce jointe volumineuse peut atteindre 50 g. Un spam non lu coute à la planete 0,3 g.",
"Il me semble que le mots de passe de Faux-Rom est aknjshu",
"Regarde sur le post-it à cote du stylo",
"Il me semble que le mots de passe de Imail est cR0u$",
"Bravo tu as fini le jeu ! Tu en sais maintenant un petit peu plus sur l'identite numérique ! N'hesites pas a mettre en application ce que tu as appris ici ! "]


let i = 0
let speed = 10
let encours = false
let fin = false
let count = 0
let stopFunction = false

function typeWriter(nb) {
    Dialogue.style.visibility = 'visible'
    count = nb
    if (i < TabDialogue[nb].length) {
        if(stopFunction){
            return;
        }
        Dialogue.innerHTML += TabDialogue[nb][i];
        i++;
        encours = true
        setTimeout(typeWriter, speed,nb);
    }else{
        encours = false
    }
}

socket.on('updateDialogue', ({nb,time}) => {
    setTimeout(function(){

        console.log(TabDialogue[nb])
        Dialogue.style.visibility = 'visible'
        count = nb
        if (i < TabDialogue[nb].length) {
            if(stopFunction){
                return;
            }
            Dialogue.innerHTML += TabDialogue[nb][i];
            i++;
            encours = true
            setTimeout(typeWriter, speed,nb);
        }else{
            encours = false
        }
    }, time)
})

setTimeout(function(){typeWriter(0)},1700)


$(Dialogue).click(function(){

    if(count == 3){
        fin = true
    }
    
    if(encours){
        Dialogue.innerHTML = ""
        stopFunction = true
        i = 0
        Dialogue.innerHTML = TabDialogue[count]
        encours = false
    }else if(fin){
            stopFunction = false
            Dialogue.innerHTML = ""
            i = 0
            inRoom = true
            Dialogue.style.visibility = "hidden"
        }
        else{
            stopFunction = false
            Dialogue.innerHTML = ""
            i = 0
            typeWriter(count+1)
        }
})