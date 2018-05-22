var express    = require('express');        // call express
var app        = express();                 // define our app using express
var port = process.env.PORT || 3001;        // set our port

var router = express.Router();              // get an instance of the express Router

router.get('/getForm', function(req, res) {  
    res.json({
        customerName: 'Ricardo',
        questions: [
            {
                name: 'Pergunta 1',
                type: 'Legal'
            },
            {
                name: 'Pergunta 2',
                type: 'Verdadeiro'
            }
        ]
    });   
});
router.get('/getForms', function(req, res) {  
    res.json([
        {
            id: 1,
            customerName: 'Ricardo',
            name: 'Questionario 1'
        },
        {
            id: 2,
            customerName: 'Rodrigo',
            name: 'Questionario 2'
        }
    ]);   
});
router.post('/createForm', function(req, res) {  
    //res.json({ message: 'hooray! welcome to our api!' });   
    console.log('CREATED');
});
router.put('/formAnswer', function(req, res) {  
    console.log('ANSWERED'); 
});


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '192.168.0.108:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/api', router);

app.listen(port);
console.log('Abriu: '+ port);