const port = process.env.PORT || 9001,
express = require('express');
morgan = require('morgan');
cors = require('cors');
app = express();

//imports
const personRoutes = require('../Backend/persona');

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