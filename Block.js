


const SHA256 = require('crypto-js/sha256');



class Block{
    constructor(timestamp, data, previousHash = ''){
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calcularHash();
        this.comodin = 0;
    }

    calcularHash(){
        return SHA256(this.comodin + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
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