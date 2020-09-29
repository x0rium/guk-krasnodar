"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.integration = void 0;
const request = require("request");
class integration {
    constructor(accountNumber) {
        this.requestOptions = {};
        this.endpoint = "http://lk.gukkrasnodar.ru";
        this.accountNumber = accountNumber;
    }
    _parse(body, headers, statusCode) {
        if (statusCode >= 200) {
            if (statusCode < 400) {
                this.csrf = integration._parseMetaToken(body);
            }
        }
        this.cookie = integration._parseCookie(headers);
    }
    static _parseMetaToken(html) {
        const rule = /<meta name="csrf-token" content="(?<token>.*)">/;
        return html.match(rule).groups.token;
    }
    static _parseCookie(headers) {
        const arr = headers['set-cookie'];
        if (arr) {
            const session = integration._parseSession(arr[0]);
            const csrf = integration._parseCsrf(arr[1]);
            return `PHPSESSID=${session}; _csrf=${csrf}`;
        }
        return "";
    }
    static _parseSession(str) {
        const rule = /PHPSESSID=(?<phpsessid>.*); path/;
        return str.match(rule).groups.phpsessid;
    }
    static _parseCsrf(str) {
        const rule = /_csrf=(?<csrf>.*); path/;
        return str.match(rule).groups.csrf;
    }
    execute() {
        this.requestOptions["followAllRedirects"] = true;
        this.requestOptions["jar"] = true;
        if (this.cookie) {
            this.requestOptions['headers'] = {
                'Cookie': this.cookie
            };
        }
        return new Promise((resolve, reject) => {
            request(this.requestOptions, (error, response) => {
                if (error) {
                    reject(error);
                }
                this._parse(response.body, response.headers, response.statusCode);
                resolve(response);
            });
        });
    }
    initRequest() {
        this.requestOptions["url"] = this.endpoint + "/lite";
        return this.execute();
    }
    anonymousRequest() {
        this.requestOptions["url"] = this.endpoint + "/lite";
        this.requestOptions["method"] = "POST";
        this.requestOptions["formData"] = {
            'SearchLsForm[ls]': this.accountNumber,
            '_csrf': this.csrf
        };
        return this.execute();
    }
    async getData() {
        try {
            await this.initRequest();
            const { body } = await this.anonymousRequest();
            return this.parseValues(body);
        }
        catch (error) {
            console.error(error);
            throw new error;
        }
    }
    parseValues(html) {
        //https://regex101.com/r/k1mXZO/3
        let clear;
        const matches = {};
        clear = html.replace(/^\s*[\r\n]/gm, "").replace(/^\s*$(?:\r\n?|\n)/gm, "");
        const rule1 = /<tr data-key="(?<id>\d{1,10})"><td data-col-seq="0"><strong>(?<type>.{1,20})<\/strong><\/td><td data-col-seq="1">(?<hwId>\d{1,10})<\/td><td data-col-seq="2">(?<nextCheckDate>.{6,10})/gm;
        matches["rule1"] = clear.matchAll(rule1);
        const rule2 = /<tr data-key="(?<waterId>\d{1,6})"><td data-col-seq="0">(?<lastPostDate>.{3,20})<\/td><td data-col-seq="1">(?<value>\d{1,10})/gm;
        matches["rule2"] = clear.matchAll(rule2);
        let values = [];
        let x = 0;
        for (const m of matches["rule1"]) {
            values[x] = Object.assign({}, m.groups);
            x++;
        }
        x = 0;
        for (const m of matches["rule2"]) {
            values[x] = Object.assign(values[x], m.groups);
            x++;
        }
        return values.map((item => {
            const fields = ["id", "hwId", "waterId", "value"];
            fields.forEach(field => {
                item[field] = parseInt(item[field]);
            });
            return item;
        }));
    }
}
exports.integration = integration;
