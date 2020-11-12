

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
        //newBlock.hash = newBlock.calcularHash();
        newBlock.minarBloque(2);
        this.chain.push(newBlock);
    }

    validarCadena(){
        for(let i = 1; i<this.chain.length; i++){
            const bloqueActual = this.chain[i];
            const bloqueAnterior = this.chain[i-1];

            // Comprobacion del hash
            if(bloqueActual.hash != bloqueActual.calcularHash()){
                return false;
            }

            //Si el hash previo coindice
            if(bloqueActual.previousHash != bloqueAnterior.hash){
                return false;
            }
        }

        return true;
    }

}

module.exports = Blockchain;