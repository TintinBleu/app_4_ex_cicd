const express = require('express');
const app = express();

const PORT = 4040;

app.get('/', function(req, res) {
    res.send("Hello guys...");
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});
