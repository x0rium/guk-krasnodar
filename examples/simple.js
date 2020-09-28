//just log in console water meter values
const guk= require("../src/guk")
const accountNumber = '040036610'
const g = new guk(accountNumber);
g.getValues().then(v=>console.log(v)).catch(e => e)