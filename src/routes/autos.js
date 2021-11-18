const express = require('express');
const router = express.Router();
const pool = require('../database.js');
const { route } = require('./index.js');

router.get('/', async(req, res) =>{
    let listAutos = await pool.query('SELECT * FROM autos');
    res.json({
        status: 200,
        message: "Se ha listado correctamente",
        listAutos: listAutos
    });
});
router.get('/:id', async(req, res) => { 
    const { id } = req.params;      
    let auto = await pool.query('SELECT * FROM autos WHERE id = ?',[id]);
    res.json({
        status: 200,
        message: "Se ha obtenido correctamente",
        auto: auto
    });
});

router.post('/create', async(req, res) =>{
    // var dd = today.getDate();
    // var mm = today.getMonth() + 1; 
    // var yyyy = today.getFullYear();
    // today = mm + '/' + dd + '/' + yyyy;

    const {name, Matricula, yearVerification, Marca} = req.body;
    const auto = {
        name, Matricula, yearVerification, dateCreacion :new Date() ,dateUpdate :new Date() , status: 1 ,Marca
    };

    await pool.query('INSERT INTO autos set ?', [auto]);
    res.json({
        status: 200,
        message: "Se ha registrado correctamente",
        auto: auto
    });

});
router.post('/update/:id', async(req, res) =>{
    const { id } = req.params;
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const { name, Matricula, Marca} = req.body;

    const auto = { name, Matricula, dateUpdate : new Date(), status: 1,Marca };

    await pool.query('UPDATE autos SET ? WHERE id = ?', [auto, id]);
    res.json({
        status: 200,
        message: "Se ha acualizado correctamente",
        auto: auto
    });
});

router.post('/delete/:id', async(req, res) =>{
    const { id } = req.params;

   await pool.query('UPDATE autos SET status = 0 WHERE id = ?', [id]);
   res.json({
       status: 200,
       message: "Se ha eliminado corectamente"
   });
});


module.exports = router;