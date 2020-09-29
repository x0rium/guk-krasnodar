"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const integration_1 = require("../src/integration");
const x = new integration_1.integration("040036610");
x.getData().then(data => {
    console.log(data);
}).catch(e => e);
