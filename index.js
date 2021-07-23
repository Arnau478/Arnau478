const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.set('port', process.env.PORT || 80);

app.listen(app.get('port'), () => console.log('Server running on port ' + app.get('port')));