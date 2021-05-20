const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Test 1'));
jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
    var cssFn = jQuery.fn[ name ];
    jQuery.fn[ name ] = function( speed, easing, callback ) {
      return speed == null || typeof speed === "boolean" ?
        cssFn.apply( this, arguments ) :
        this.animate( genFx( name, true ), speed, easing, callback );
    };
  } );
app.listen(port);
console.log(`App running on http://localhost:${port}`);
