const Block = require('./Block');
const Blockchain = require('./Blockchain');
 
const jmdCoin = new Blockchain();

const bloque1 = new Block('12/11/2020 20:03', { cantidad: 100});
const bloque2 = new Block('13/11/2020 20:03', { cantidad: 20});

jmdCoin.agregarBloque(bloque1);
jmdCoin.agregarBloque(bloque2);
