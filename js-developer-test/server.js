const connect = require( 'connect' ),
		serveStatic = require( 'serve-static' );

const port = 3001

connect()
		.use( serveStatic( '.' ) )
		.listen(port, () => {
			console.log( 'Server running on http://localhost:' + port);
		} );