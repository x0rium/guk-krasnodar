//just log in console water meter values
const guk= require("../src/guk")
const accountNumber = ''
const g = new guk(accountNumber);
g.getValues().then((v) => {
    console.log(v)
}).catch(e => e)