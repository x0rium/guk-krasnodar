const request = require('request');

class guk {
    constructor(accountNumber) {
        this.accountNumber=accountNumber;
        this.csrf = null;
        this.cookie = null;
    }

    findAccountRequest(err, cb) {
        const options = {
            'method': 'POST',
            followAllRedirects: true,
            jar: true,
            'url': 'http://lk.gukkrasnodar.ru/lite',
            'headers': {
                'Cookie': this.cookie
            },
            formData: {
                'SearchLsForm[ls]':this.accountNumber,
                '_csrf': this.csrf
            }
        };

        request(options, (error, response) => {
            if (error) {
                console.error(error);
                throw new Error(error);
            }
            this._parse(response);
            // console.log("StatusCode=>", response.statusCode);
            cb(response);
        });

    }


    getToken(err, cb) {
        const options = {
            'method': 'GET',
            followAllRedirects: true,
            jar: true,
            'url': 'http://lk.gukkrasnodar.ru/lite',
        };

        request(options, (error, response) => {
            if (error) {
                err(error);
                console.error(error);
                throw new Error(error);
            }
            this._parse(response);
            cb(response);
        });
    }

    _parse(response) {
        if (response.statusCode >= 200 && response.statusCode < 400) {
            this.csrf = this._parseMetaToken(response.body)
            // console.log("Parsed Meta CSRF token=>", response.statusCode);
        }
        this.cookie = this._parseCookie(response.headers);
    }

    _parseMetaToken(html) {
        const rule = /<meta name="csrf-token" content="(?<token>.*)">/
        // console.log(html)
        return html.match(rule).groups.token;
    }

    _parseCookie(headers) {
        const arr = headers['set-cookie'];
        if (arr) {
            const session = this._parseSession(arr[0]);
            const csrf = this._parseCsrf(arr[1]);
            return `PHPSESSID=${session}; _csrf=${csrf}`;
        }
        return ""
    }

    _parseSession(str) {
        const rule = /PHPSESSID=(?<phpsessid>.*); path/
        return str.match(rule).groups.phpsessid;
    }

    _parseCsrf(str) {
        const rule = /_csrf=(?<csrf>.*); path/
        return str.match(rule).groups.csrf;
    }

    _parseValues(html) {
        const rule = /<\/td><td data-col-seq="1">(?<value>.*)<\/td><\/tr>/g
        const matches = html.matchAll(rule);
        let values = [];
        for (const m of matches) {
            values.push(m.groups.value);
        }
        return values;
    }

    getValues() {
        return new Promise((resolve, reject) => {
            this.getToken((getTokenErr) => {
                reject(getTokenErr);
            }, () => {
                this.findAccountRequest((finAccErr) => {
                    reject(finAccErr)
                }, (resp) => {
                    resolve(this._parseValues(resp.body));
                })
            });
        })

    }
}
module.exports=guk;