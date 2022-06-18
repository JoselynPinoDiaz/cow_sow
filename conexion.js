const port = process.env.PORT ||3000,
express = require('express'),
app = express();
db = require('./models');
cors = require('cors'),
bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(port, () =>{
    console.log('Servidor Corriendo en puerto ${port}.... ');
});

db.sequelize
.authenticate()
//.sync({force: true})
.then(() => console.log(' Conectado a la base de datos'))
.catch((e) => console.log('Error => ${e}'));  