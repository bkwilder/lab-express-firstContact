const express = module.require('express');


const app = express();
app.use(express.static('images')); 

const PORT = 1337

app.listen(PORT, () => {
    console.log('listening on port ${PORT}');
});


app.get('/', (req, res) => {
    res.send(`<h1> Puppies and Kittens Galore!</h1>`);
});

app.get('/puppies', (req, res) => {
    res.send(`<img src = puppies.jpeg width="50%" height="50%">`);
});

app.get('/kittens', (req, res) => {
    res.send(`<img src = kittens.webp>`);
});

