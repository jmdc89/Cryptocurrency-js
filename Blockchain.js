

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

    obtenerUltimoBloque(){
        return this.chain[this.chain.length - 1];
    }

    agregarBloque(newBlock){
        newBlock.previousHash = this.obtenerUltimoBloque().hash;
        newBlock.hash = newBlock.calcularHash();
        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;