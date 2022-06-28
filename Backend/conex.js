const port = process.env.PORT || 9001, 
express = require('express');
morgan = require('morgan');
cors = require('cors');
app = express();
db = require('../models');

const bodyParser = require('body-parser');
const { argsArePrimaryKeys } = require('sequelize-oracle/lib/utils');
//imports
const personRoutes = require('../Backend/persona');

const whiteList = ['http://localhost:8100','http://localhost:8201']

app.use(cors({origin: whiteList}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


//settings
app.set('port', 9001);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(personRoutes);



//run
app.listen(app.get('port'), () => {
    console.log('Server on Port 9001')
})

db.sequelize
.sync({force: true})
.then(() => console.log('Conexion a la base de Datos....'))
.catch((e) => console.log('Error => $(e)'))