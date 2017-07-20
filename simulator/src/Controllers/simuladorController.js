const express = require('express');
const simulador = require('../abastecimentoSimulator.js');

const app = express();

const config = require('../../resources/config.json');


/**
 * Controller Associated to a RESTfull method
 * 
 * @class Controller
 */
class simuladorController{

    /**
     * Begin Application 
     * 
     * @param {any} router 
     * @returns 
     * 
     * @memberOf Controller
     */
    init(router){
        router.get(config.simulador.controladoraRoute, this.abastMiddle, this.sendAbast);
        return router;
    }   

    
    /**
     * Middleware for porecessing income data
     * It can be repplicated for more steps
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * 
     * @memberOf Controller
     */
    abastMiddle(req, res, next){ 
        req.abastecimentos = simulador.getAbastecimentos(req.query.leituras);
        next(); // pass to next middleware
    }
   
    /**
     * Callback to send the response
     * 
     * @param {any} req 
     * @param {any} res 
     * 
     * @memberOf Controller
     */
    sendAbast(req, res){
        console.log(req.abastecimentos);
        res.json(req.abastecimentos);
        //Send response
    }
    
}

//Returns a singleton when call for require
module.exports = new simuladorController();