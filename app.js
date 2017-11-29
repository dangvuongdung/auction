let express =require('express');
let app = express();
//let Web3= require('./public/js/web3.min.js');
let port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', './src/view');
app.use(express.static(__dirname + '/public'));



app. get('/', (req, res) => {
	res.render('index');
});
app.get('/createauction', (req, res) => {
  res.render('createauction');
});
app.get('/:id', (req, res) => {
  res.render('auction', { id: req.params.id });
});


app.listen(port, () => {
	console.log('Server is listening on port' + port);
})