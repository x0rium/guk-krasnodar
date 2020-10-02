import Integration from "../index";

const x = new Integration("000036610");
x.getData().then(data => {
    console.log(data)
}).catch(e => e);