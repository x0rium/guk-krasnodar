// tslint:disable-next-line:no-var-requires
const request = require("request");

interface Response {
    body: string,
    statusCode: number,
    // @ts-ignore
    headers: cHeaders
}

type cHeaders = {
    "set-cookie": string[]
}


type GUK = {
    id: number,
    type: string,
    hwid: number,
    nextCheckDate: string,
    waterId: number,
    lastPostDate: string,
    value: number
}

class Integration {
    private csrf: string
    private cookie: string
    private readonly accountNumber: string
    private requestOptions = {
        followAllRedirects: true,
        jar: true,
        headers: {},
        url: "",
        method: "",
        formData: {}
    }
    private readonly endpoint = "http://lk.gukkrasnodar.ru"

    constructor(accountNumber: string,) {
        this.csrf = "";
        this.cookie = "";
        this.accountNumber = accountNumber;
    }

    private _parse(body: string, headers: cHeaders, statusCode: number) {
        if (statusCode >= 200) {
            if (statusCode < 400) {
                this.csrf = Integration._parseMetaToken(body)
            }
        }
        this.cookie = Integration._parseCookie(headers);
    }

    private static _parseMetaToken(html: string): string {
        const rule = /<meta name="csrf-token" content="(?<token>.*)">/
        const matched = html.match(rule);
        if (matched && matched.groups) {
            return matched.groups.token;
        }
        return "";
    }

    private static _parseCookie(headers: cHeaders): string {
        let arr: string[];
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

    private static _parseSession(str: string): string {
        const rule = /PHPSESSID=(?<phpsessid>.*); path/
        const matched = str.match(rule);
        if (matched && matched.groups) {
            return matched.groups.phpsessid;
        }
        return "";
    }

    private static _parseCsrf(str: string): string {
        const rule = /_csrf=(?<csrf>.*); path/
        const matched = str.match(rule);
        if (matched && matched.groups) {
            return matched.groups.csrf;
        }
        return "";
    }

    private execute(): Promise<Response> {
        this.requestOptions.followAllRedirects = true;
        this.requestOptions.jar = true;
        if (this.cookie) {
            this.requestOptions.headers = {
                'Cookie': this.cookie
            };
        }
        return new Promise((resolve, reject) => {

            request(this.requestOptions, (error: unknown, response: Response) => {
                if (error) {
                    reject(error);
                }
                // @ts-ignore
                this._parse(response.body, response.headers, response.statusCode);
                resolve(response);
            });
        });

    }

    private initRequest() {
        this.requestOptions.url = this.endpoint + "/lite"
        return this.execute();
    }

    private anonymousRequest() {
        this.requestOptions.url = this.endpoint + "/lite"
        this.requestOptions.method = "POST";
        this.requestOptions.formData = {
            'SearchLsForm[ls]': this.accountNumber,
            '_csrf': this.csrf
        }
        return this.execute();
    }

    public async getData(): Promise<GUK[]> {
        try {
            await this.initRequest();
            const {body}: Response = await this.anonymousRequest();
            return this.parseValues(body);

        } catch (error) {
            console.error(error);
            throw error;
        }

    }

    private parseValues(html: string): GUK[] {
        let clear;
        let rule1: IterableIterator<RegExpMatchArray>;
        let rule2: IterableIterator<RegExpMatchArray>;
        clear = html.replace(/^\s*[\r\n]/gm, "").replace(/^\s*$(?:\r\n?|\n)/gm, "");
        const regex1 = /<tr data-key="(?<id>\d{1,10})"><td data-col-seq="0"><strong>(?<type>.{1,20})<\/strong><\/td><td data-col-seq="1">(?<hwId>\d{1,10})<\/td><td data-col-seq="2">(?<nextCheckDate>.{6,10})/gm
        rule1 = clear.matchAll(regex1);
        const regex2 = /<tr data-key="(?<waterId>\d{1,6})"><td data-col-seq="0">(?<lastPostDate>.{3,20})<\/td><td data-col-seq="1">(?<value>\d{1,10})/gm
        rule2 = clear.matchAll(regex2);
        const values: object[] = [];
        let x = 0;
        for (const m of rule1) {
            values[x] = Object.assign({}, m.groups);
            x++
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
            })
            return item;
        }));
    }
}

module.exports = Integration;