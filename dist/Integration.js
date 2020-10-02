var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// tslint:disable-next-line:no-var-requires
const request = require("request");
class Integration {
    constructor(accountNumber) {
        this.requestOptions = {
            followAllRedirects: true,
            jar: true,
            headers: {},
            url: "",
            method: "",
            formData: {}
        };
        this.endpoint = "http://lk.gukkrasnodar.ru";
        this.csrf = "";
        this.cookie = "";
        this.accountNumber = accountNumber;
    }
    _parse(body, headers, statusCode) {
        if (statusCode >= 200) {
            if (statusCode < 400) {
                this.csrf = Integration._parseMetaToken(body);
            }
        }
        this.cookie = Integration._parseCookie(headers);
    }
    static _parseMetaToken(html) {
        const rule = /<meta name="csrf-token" content="(?<token>.*)">/;
        const matched = html.match(rule);
        if (matched && matched.groups) {
            return matched.groups.token;
        }
        return "";
    }
    static _parseCookie(headers) {
        let arr;
        if (headers.hasOwnProperty("set-cookie")) {
            arr = headers['set-cookie'];
            if (arr) {
                const session = Integration._parseSession(arr[0]);
                const csrf = Integration._parseCsrf(arr[1]);
                return `PHPSESSID=${session}; _csrf=${csrf}`;
            }
        }
        return "";
    }
    static _parseSession(str) {
        const rule = /PHPSESSID=(?<phpsessid>.*); path/;
        const matched = str.match(rule);
        if (matched && matched.groups) {
            return matched.groups.phpsessid;
        }
        return "";
    }
    static _parseCsrf(str) {
        const rule = /_csrf=(?<csrf>.*); path/;
        const matched = str.match(rule);
        if (matched && matched.groups) {
            return matched.groups.csrf;
        }
        return "";
    }
    execute() {
        this.requestOptions.followAllRedirects = true;
        this.requestOptions.jar = true;
        if (this.cookie) {
            this.requestOptions.headers = {
                'Cookie': this.cookie
            };
        }
        return new Promise((resolve, reject) => {
            request(this.requestOptions, (error, response) => {
                if (error) {
                    reject(error);
                }
                // @ts-ignore
                this._parse(response.body, response.headers, response.statusCode);
                resolve(response);
            });
        });
    }
    initRequest() {
        this.requestOptions.url = this.endpoint + "/lite";
        return this.execute();
    }
    anonymousRequest() {
        this.requestOptions.url = this.endpoint + "/lite";
        this.requestOptions.method = "POST";
        this.requestOptions.formData = {
            'SearchLsForm[ls]': this.accountNumber,
            '_csrf': this.csrf
        };
        return this.execute();
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.initRequest();
                const { body } = yield this.anonymousRequest();
                return this.parseValues(body);
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
    parseValues(html) {
        let clear;
        let rule1;
        let rule2;
        clear = html.replace(/^\s*[\r\n]/gm, "").replace(/^\s*$(?:\r\n?|\n)/gm, "");
        const regex1 = /<tr data-key="(?<id>\d{1,10})"><td data-col-seq="0"><strong>(?<type>.{1,20})<\/strong><\/td><td data-col-seq="1">(?<hwId>\d{1,10})<\/td><td data-col-seq="2">(?<nextCheckDate>.{6,10})/gm;
        rule1 = clear.matchAll(regex1);
        const regex2 = /<tr data-key="(?<waterId>\d{1,6})"><td data-col-seq="0">(?<lastPostDate>.{3,20})<\/td><td data-col-seq="1">(?<value>\d{1,10})/gm;
        rule2 = clear.matchAll(regex2);
        const values = [];
        let x = 0;
        for (const m of rule1) {
            values[x] = Object.assign({}, m.groups);
            x++;
        }
        x = 0;
        for (const m of rule2) {
            values[x] = Object.assign(values[x], m.groups);
            x++;
        }
        // @ts-ignore
        return values.map((item => {
            const fields = ["id", "hwId", "waterId", "value"];
            fields.forEach(field => {
                // @ts-ignore
                item[field] = parseInt(item[field], 0);
            });
            return item;
        }));
    }
}
module.exports = Integration;
