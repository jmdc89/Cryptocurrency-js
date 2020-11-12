

// https://www.npmjs.com/package/crypto-js
const SHA256 = require('crypto-js/sha256');


class Block{
    constructor(timestamp, transactions, previousHash = ''){
        this.timestamp = timestamp;
        //this.data = data;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calcularHash();
        this.comodin = 0;
    }

    calcularHash(){
        return SHA256(this.comodin + this.timestamp + this.previousHash + JSON.stringify(this.transactions)).toString();
    }

    minarBloque(dificultad){
        while(this.hash.substring(0, dificultad) !== Array(dificultad+1).join('0')){
            this.comodin++;
            this.hash = this.calcularHash();
        }
        console.log('Bloque minado: ' + this.hash);
    }





}


module.exports = Block;