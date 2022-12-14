//. app.js
var express = require( 'express' ),
    session = require( 'express-session' ),
    app = express();

var db = require( './api/db' );
app.use( '/api/db', db );

app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

//. Session
var sess = {
  secret: 'noderestapi',
  cookie: {
    path: '/',
    maxAge: (7 * 24 * 60 * 60 * 1000)
  },
  resave: false,
  saveUninitialized: false //true
};
app.use( session( sess ) );

app.get( '/', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );
  res.write( JSON.stringify( { status: true }, null, 2 ) );
  res.end();
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );

module.exports = app;
