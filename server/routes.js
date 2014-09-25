'use strict';

//////////////////////////////////////////////////////////
// API's Request Handlers
var abTestRequestHandlers = require( './api/ab_tests/main' );


//////////////////////////////////////////////////////////
// Module Routes
module.exports = function( app ) {

  app.use('/api/ab_tests', abTestRequestHandlers );

  // TODO: require and add request-handler for campaigns
  app.use('/api/campaigns', function( req, res ) {
    res.send( 'hit api/campaigns route' );
  });

  // TODO: require and add request-handler for queries
  app.use('/api/queries', function( req, res ) {
    res.send( 'hit api/queries route' );
  });

  // TODO: require and add request-handler for timers
  app.use('/api/timers', function( req, res ) {
    res.send( 'hit api/timers route' );
  });

  // TODO: require and add request-handler for users
  app.use('/api/users', function( req, res ) {
    res.send( 'hit api/users route' );
  });

  app.route('/').get( function( req, res ){
    res.send('server landing page');
  });

};