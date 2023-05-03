const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
	res.send("Hello from famous indian cuisine")
});

app.get('/chef', (req, res) => {
	res.send(chef);
})

app.get('/recipes', (req, res) => {
	res.send(recipes);
})

app.get('/chef/:id', (req, res) => {
	const id = parseInt(req.params.id);
	console.log(id);
	const selectedChef = chef.find(c => parseInt(c.id) === id);
	res.send(selectedChef);
})

app.get('/recipes/:id', (req, res) => {
	const id = parseInt(req.params.id);
	console.log(id);
	const chefsRecipes = recipes.filter(r => parseInt(r.id) === id);
	res.send(chefsRecipes);
})

app.listen(port, () => {
	console.log(`Famous Indian Cuisine is running on port no: ${port}`);
})