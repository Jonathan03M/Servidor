const express = require('express')
const app = express()
const path = require('path');

app.use(require('./routes/routes.js'))



app.use(express.static(path.join(__dirname, 'src/public/img')));


const port = process.env.PORT || 3000;



app.listen(port, console.log(`servidor iniciado en el puerto ${port}`))

