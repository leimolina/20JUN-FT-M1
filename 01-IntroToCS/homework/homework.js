'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var total = 0;
for (let i = 0; i < num.length; i++) {
  total = total + num[i]*2**(num.length-1-i)
}
return total;
}

function DecimalABinario(num) {
  // tu codigo aca
var total = num.toString(2);
return total;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}