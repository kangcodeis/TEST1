const express = require('express')
const nunjscks = require('nunjucks')
const app = express()

app.set('view engine','html')
nunjscks.configure('views',{
    express:app,
    watch:true
})

app.get('/',(req,res) => {
    req.setEncoding('hellonode')
})

app.listen(3005,() => {
    console.log('serverstart')
})