const port = 3000;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});