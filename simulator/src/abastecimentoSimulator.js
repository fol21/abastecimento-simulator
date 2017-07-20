const moment = require('moment');

class AbastecimentoSimulator {

    _randomInRange(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    _generateValorLitrosPrecoInRange(min, max) {
        let valor = this._randomInRange(min, max).toString();
        let litros = this._randomInRange(min, max).toString();
        let pu = (parseFloat(valor) / parseFloat(litros)).toFixed(2).toString();
        return {
            valor: valor,
            litros: litros,
            pu: pu
        };
    }

    _generateData(){
       return moment().format('D/M/Y');
    }

    _generateHour(){
        return moment().format('HH:mm');
    }

    _generateRegistro(){
        return parseInt(this._randomInRange(1,1000).toString()).toString();
    }
    
    _generateAbast() {
        let valores =  this._generateValorLitrosPrecoInRange(1, 10);
        return {
            controller_resp: null,
            total_dinheiro: valores.valor,
            total_litros: valores.litros,
            PU: valores.pu,
            tempo: null,
            codbico: null,
            numtanque: null,
            seriecbc: null,
            data:  this._generateData(),
            hora: this._generateHour(),
            registro:  this._generateRegistro(),
            encerranteI: null,
            encerranteF: null,
            tagFrentista: null,
            tagCliente: null
        }
    }


    getAbastecimentos(leituras) {
        let abastecimentos= [];
        for(let i = 0; i <leituras ; i++){
            abastecimentos.push(this._generateAbast());
        }
        return abastecimentos;
    }
}


module.exports = new AbastecimentoSimulator();