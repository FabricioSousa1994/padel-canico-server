const mongoose = require('mongoose');

const Court = require('../models/Court.model');

const court = [
    {
        name: "Grupo São Roque",
        picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1687130318/padel-canico/court_alberto_oculista_cfx2eh.jpg",
        description: "Exterior e panorâmico"

    },

    {
        name: "Alberto Oculista",
        picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1687130304/padel-canico/court_sao_roque_qjr99x.jpg",
        description: "Exterior e panorâmico"
    }
]

const seedDB = async court => {
    try {
        const dbConnection = await mongoose.connect('mongodb://localhost/padel-canico-server');
        console.log('Connection made to:', dbConnection.connections[0].name);
        await Court.create(court)
        console.log('Created the courts')
    } catch(error) {
        console.log('An error occurred', error)
    } finally {
        await mongoose.connection.close();
    }
  }

  seedDB(court);