import {Integration} from "../src/integration";

const x = new Integration("040036610");
x.getData().then(data => {
    console.log(data)
}).catch(e => e);