

const Block = require('./Block');
const Transaction = require('./Transaction');


class Blockchain {
    constructor(){
        this.chain = [
            this.crearBloqueGenesis()
        ];
        this.transaccionesPendientes = [];
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

    agregarTransaccion(transaction){
        this.transaccionesPendientes.push(transaction);
    }

    minarTransaccionesPendientes(minero){
        const block = new Block(new Date(), this.transaccionesPendientes);
        block.previousHash = this.obtenerUltimoBloque().hash;
        block.minarBloque(2);
        console.log('Se han minado las transacciones pendientes');
        this.chain.push(block);
        this.transaccionesPendientes = [
            new Transaction(null, minero, 100)
        ];
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