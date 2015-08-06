'use strict';

const express = require('express'),
    app = express();

// Static middleware serving files from the "public" folder
app.use(express.static('public'));

const server = app.listen(3001, function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});