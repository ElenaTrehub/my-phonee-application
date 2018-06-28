"use strict"

import CatalogController from './controllers/CatalogController';
import PhoneController from './controllers/PhoneController';



let app = angular.module('MyPhoneApplication',[
    'ngRoute'
]);



app.config( [ '$routeProvider' , '$locationProvider'  , ($routeProvider , $locationProvider)=>{

    console.log('config!');

    $locationProvider.html5Mode(true);

    $routeProvider.when('/' , {

        templateUrl: 'templates/cataloge.html',
        controller: [  '$scope' , '$http'  , CatalogController ]

    });

    $routeProvider.when('/single-phone/:phoneID' , {

        controller: [ '$scope', '$http' , '$routeParams' , PhoneController],
        templateUrl: 'templates/single-phone.html'

    });

} ] );

app.run();