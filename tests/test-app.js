/**
 * Created with JetBrains PhpStorm.
 * Author: Kirill Cherkashin
 *
 */

'use strict';


(function ( testacular, Ext ) {

    // Delay running tests
    testacular.loaded = Ext.emptyFn;

    // Redefining other paths to make them work with testacular.
    Ext.Loader.setPath( {
        // Do the same with other paths, if necessary
        // just add "base" before the path.
        'appName': 'base/app'

    } );

    Ext.application( {
        name: 'appName',
        // Add dependencies here
        views: ['Main'],

        launch: function () {
            // Start the tests.
            testacular.start();
        }
    } );

}( window.__testacular__, window.Ext ));