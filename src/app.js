const express = require('express');
//const navigator = require('web-midi-api');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

/*
navigator.mediaDevices.getUserMedia(
    { video: true, audio: true },
    stream => {
        const localVideo = document.getElementById("local-video");
        if (localVideo) {
            localVideo.srcObject = stream;
        }
    },
    error => {
        console.warn(error.message);
    }
);
*/
