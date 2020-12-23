const express = require('express')
const https = require('https');
const fs = require('fs');

const app = express()
const port = 3000

app.get('/', (req, res) => {

  const client = require('twilio')();
  client.messages.create({
          from: 'whatsapp:+14155238886',
          body: 'Alguém apareceu na camera!',
          to: 'whatsapp:+5519982993340'
  })

    console.log(`Uma pessoa foi identificada e uma mensagem enviada para o responsável.`)
    res.send('ok')
})

https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: '0325'
}, app)
.listen(3000);
