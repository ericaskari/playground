const express = require('express');
const json = require('express').json;
const urlencoded = require('express').urlencoded;
const fs = require('fs');
const cors = require('cors');
const app = express()
const port = 3000
const {Readable} = require('stream');


app.use(json()); //Make sure u have added this line
app.use(urlencoded({extended: false}));


app.use(cors())
app.get('/', (request, response) => {
    const fileName = request.query.name;

    fs.readFile(fileName, (err, data) => {
        const fileStream = Readable.from(data);

        fileStream.on('error', (err) => {
            console.log(err.message);
            response.status(404).send();
            fileStream.removeAllListeners();
        });

        fileStream.on('end', () => {
            console.log('Streamed successfully ');
            fileStream.removeAllListeners();
        });
        fileStream.pipe(response);
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
