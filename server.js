const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/angul-app'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/angul-app/'});
});

app.listen(process.env.PORT || 8080);



