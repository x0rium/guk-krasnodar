// tslint:disable-next-line:no-var-requires
const request = require("request");

interface Response {
    body: string,
    statusCode: number,
    headers: object
}

interface GUK {
    id: number,
    type: string,
    hwid: number,
    nextCheckDate: string,
    waterId: number,
    lastPostDate: string,
    value: number
}

export class Integration {
    private csrf: string
    private cookie: string
    private readonly accountNumber: string
    private requestOptions = {
        followAllRedirects: undefined,
        jar: undefined,
        headers: undefined,
        url: undefined,
        method: undefined,
        formData: undefined
    }
    private readonly endpoint = "http://lk.gukkrasnodar.ru"

    constructor(accountNumber: string,) {
        this.accountNumber = accountNumber;
    }

    private _parse(body: string, headers: object, statusCode: number) {
        if (statusCode >= 200) {
            if (statusCode < 400) {
                this.csrf = Integration._parseMetaToken(body)
            }
        }
        this.cookie = Integration._parseCookie(headers);
    }

    private static _parseMetaToken(html: string): string {
        const rule = /<meta name="csrf-token" content="(?<token>.*)">/
        return html.match(rule).groups.token;
    }

    private static _parseCookie(headers) {
        const arr = headers['set-cookie'];
        if (arr) {
            const session = Integration._parseSession(arr[0]);
            const csrf = Integration._parseCsrf(arr[1]);
            return `PHPSESSID=${session}; _csrf=${csrf}`;
        }
        return ""
    }

    private static _parseSession(str: string): string {
        const rule = /PHPSESSID=(?<phpsessid>.*); path/
        return str.match(rule).groups.phpsessid;
    }

    private static _parseCsrf(str: string): string {
        const rule = /_csrf=(?<csrf>.*); path/
        return str.match(rule).groups.csrf;
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

            request(this.requestOptions, (error, response) => {
                if (error) {
                    reject(error);
                }
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
        // https://regex101.com/r/k1mXZO/3
        let clear;
        const matches = {
            rule1: undefined,
            rule2: undefined,
        };
        clear = html.replace(/^\s*[\r\n]/gm, "").replace(/^\s*$(?:\r\n?|\n)/gm, "");
        const rule1 = /<tr data-key="(?<id>\d{1,10})"><td data-col-seq="0"><strong>(?<type>.{1,20})<\/strong><\/td><td data-col-seq="1">(?<hwId>\d{1,10})<\/td><td data-col-seq="2">(?<nextCheckDate>.{6,10})/gm
        matches.rule1 = clear.matchAll(rule1);
        const rule2 = /<tr data-key="(?<waterId>\d{1,6})"><td data-col-seq="0">(?<lastPostDate>.{3,20})<\/td><td data-col-seq="1">(?<value>\d{1,10})/gm
        matches.rule2 = clear.matchAll(rule2);
        const values = [];
        let x = 0;
        for (const m of matches.rule1) {
            values[x] = Object.assign({}, m.groups);
            x++
        }
        x = 0;
        for (const m of matches.rule2) {
            values[x] = Object.assign(values[x], m.groups);
            x++;
        }
        return values.map((item => {
            const fields = ["id", "hwId", "waterId", "value"];
            fields.forEach(field => {
                item[field] = parseInt(item[field], 0);
            })
            return item;
        }));
    }
}
