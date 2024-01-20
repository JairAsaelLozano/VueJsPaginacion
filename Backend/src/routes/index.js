const {Router} = require('express');
const router = Router();
const { faker } = require('@faker-js/faker');
const PersonModel = require('../models/PersonModel')

//esta ruta crea personas de forma total aleatoria usando 'Faker' y no el del lol :P
router.get('/create',   async (req,res) =>{

    for (let i = 0; i< 100; i++){
         await PersonModel.create({
            Name: faker.person.fullName(),
            jobTitle: faker.person.jobTitle(),
            gender: faker.person.gender(),
            zodiacSign: faker.person.zodiacSign(),
            bio: faker.person.bio(),
            jobArea: faker.person.jobArea(),
            image: faker.image.url()
        })
    }

    res.send('registros creados')
});

//con esta ruta obtendremos a las personas
router.get('/persons', async (req,res) =>{

    const Personas = await PersonModel.find();
    res.json(Personas);
});

module.exports = router;