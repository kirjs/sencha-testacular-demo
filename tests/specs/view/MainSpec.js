/**
 * Created with JetBrains PhpStorm.
 * Author: Kirill Cherkashin
 *
 */

'use strict';
describe( "Main view", function () {
    it( "Is a main view", function () {
        expect( Ext.create( "appName.view.Main" ).xtype );

    } );
} );