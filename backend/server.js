let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
const PORT = 3000;

let pool = new pg.Pool({
    user: 'postgres',
    database: 'contador',
    password: '12345',
    host: 'localhost',
    port: 5432,
    max: 10
});

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    next();
});

app.post('/api/new-publicacion', function (request, response) {
    var red_social=request.body.country_name;
    var segundo=request.body.segundos;
    var publicaciones=request.body.publicaciones;
    var id= 2;

    pool.connect((err, db, done) => {
        if (err) {
            return response.status(400).send(err);
        } else {
            db.query('INSERT INTO publicaciones(id, red_social, segundo, publicaciones) VALUES($1, $2, $3, $4)', [id, red_social, segundo, publicaciones], (err, table) => {
                done();
                if (err) {
                    return response.status(400).send(err);
                }
                else {
                    console.log('INSERTED DATA SUCCESS');
                    db.end();
                    response.status(201).send({message:'DATA INSERTED!'});
                }
            });
        }
    });
});

app.listen(PORT, () => console.log('Listener on port ' + PORT));