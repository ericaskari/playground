import { default as axios } from 'axios';

require('dotenv').config()

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

console.log({ FIGMA_TOKEN });
//  https://www.figma.com/file/ZuAyuwqWOvItUTlZ5eLAlm/playground-figma-api?node-id=0%3A1


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
    axios('https://api.figma.com/v1/files/Zs2s8JvlEUrpwb2ZGfIUK5', {
        headers: {
            'X-FIGMA-TOKEN': `${ FIGMA_TOKEN }`
        }
    }).then(d => {
        res.send(d.data);
    }).catch(err => {
        console.log(err)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${ port }`)
})
