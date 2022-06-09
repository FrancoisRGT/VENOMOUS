/**** Import npm libs ****/

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const routes = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
const session = require("express-session")({
    // CIR2-chat encode in sha256
    secret: "eb8fcc253281389225b4f7872f2336918ddc7f689e1fc41b64d5c4f378cdc438",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 2 * 60 * 60 * 1000,
        secure: false
    }
});

const sharedsession = require("express-socket.io-session");
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

/**** Import project libs ****/

const states = require('./back/modules/states');

/**** Project configuration ****/

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Init of express, to point our assets
app.use(express.static(__dirname + '/front/'));
app.use(urlencodedParser);
app.use(session);

// Configure socket io with session middleware
io.use(sharedsession(session, {
    // Session automatiquement sauvegardée en cas de modification
    autoSave: true
}));

// Détection de si nous sommes en production, pour sécuriser en https
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    session.cookie.secure = true // serve secure cookies
}

io.on('connection', (socket) =>{
    console.log(`Un élève s\'est connecté`);

    socket.on('disconnect', () => {
        console.log('Un élève s\'est déconnecté')
    });

    //Mise a jour de la page des missions
    socket.on('whichMission', (nb) => {
        socket.emit("thisMission" ,nb)
    });

    //Mise a jour des mots de passe une fois changé
    socket.on('newMdp',(newpassword, site) => {
        socket.emit('addNewMDP',({newpassword, site}));
    });

    socket.on('EnvoyeDialogue',(nb, time) => {
        socket.emit('updateDialogue',({nb, time}));
    })
});

//Ceci est un commentaire
http.listen(5000, () => {
    console.log('Serveur lancé sur le port 5000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');

});

app.use(express.static(path.join(__dirname, )));
app.use(routes);
    
app.use((err, req, res, next) => {
// console.log(err);
    return res.send('Internal Server Error');   
});

