
const express = require('express');
const { json } = require('express');
const morgan = require('morgan');

const app = express();

app.set('port',process.env.PORT || 4001);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index.js'));
app.use('/marca',require('./routes/marca.js'));
app.use('/autos',require('./routes/autos.js'));


app.listen(app.get('port'), () =>{
    console.log("Server on port",app.get('port'));
});