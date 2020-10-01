// tslint:disable-next-line:no-var-requires
const integration= require("../src/Integration");
const x = new integration("040036610");
x.getData().then(data => {
    console.log(data)
}).catch(e => e);