

const Block = require('./Block');


class Blockchain {
    constructor(){
        this.chain = [
            this.crearBloqueGenesis()
        ];
    }

    crearBloqueGenesis(){
        return new Block('01/01/2020', 'Bloque Genesis', '0');
    }
}

module.exports = Blockchain;