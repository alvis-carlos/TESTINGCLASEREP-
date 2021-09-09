const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/fruits', (req, res) => {
    const JsonPaises = ['cherry','orange','pear','grapes'];
    res.json(JsonPaises)
})
  
router.get('/saludo', (req, res) => {
    const data = {
        name: 'Luisa Pachon'
    };
    res.json(data);
});  

router.get('/ciudades', (req, res) => {
    const JsonPaises = ['Bogotà','Cali','New York','Ciudad de Mexico'];
    res.json(JsonPaises)
})

router.get('/paciente', (req, res) => {
    const data = {
        name: 'Fernanda', 
        lastname: 'Davila',
        age: 19
    };
    res.json(data);
});  

router.get('/animals', (req, res) => {
    const JsonPaises = ['cat','elephant','bear','tiger'];
    res.json(JsonPaises)

    
    
})
 
module.exports = router;