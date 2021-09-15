const express = require('express');
const app = express();


app.use('/', express.static('./public/lobby'));
app.listen(7778, function(err){
    if (err){
        console.log(err);
    } else {
        console.log('listening to port '+7778);
    }
});