declare const request: any;
interface Response {
    body: string;
    statusCode: number;
    headers: cHeaders;
}
declare type cHeaders = {
    "set-cookie": string[];
};
declare type GUK = {
    id: number;
    type: string;
    hwid: number;
    nextCheckDate: string;
    waterId: number;
    lastPostDate: string;
    value: number;
};
declare class Integration {
    private csrf;
    private cookie;
    private readonly accountNumber;
    private requestOptions;
    private readonly endpoint;
    constructor(accountNumber: string);
    private _parse;
    private static _parseMetaToken;
    private static _parseCookie;
    private static _parseSession;
    private static _parseCsrf;
    private execute;
    private initRequest;
    private anonymousRequest;
    getData(): Promise<GUK[]>;
    private parseValues;
}
