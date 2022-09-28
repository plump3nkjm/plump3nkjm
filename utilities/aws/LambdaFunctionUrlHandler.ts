import {HttpRequest} from "@aws-sdk/protocol-http";
import {SignatureV4} from "@aws-sdk/signature-v4";
import {Sha256} from "@aws-crypto/sha256-js";
import axios from 'axios'

export class LambdaFunctionUrlHandler {
    functionHostName: string
    accessKeyId: string
    secretAccessKey: string
    httpSchema: string

    constructor(functionHostName: string) {
        this.functionHostName = functionHostName
        this.accessKeyId = process.env.NEXT_PUBLIC_ACCESS_KEY_ID!
        this.secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY!
        this.httpSchema = 'https://'
    }

    async createSignedRequest (headers: Record<string, string>, method: string, path: string, body?: unknown) {
        const request = new HttpRequest({
            body: body ? JSON.stringify(body) : undefined,
            headers,
            hostname: this.functionHostName,
            method: method.toUpperCase(),
            path,
        });

        const signer = new SignatureV4({
            credentials: {
                accessKeyId: this.accessKeyId,
                secretAccessKey: this.secretAccessKey,
            },
            service: "lambda",
            region: "ap-northeast-1",
            sha256: Sha256,
        });

        return await signer.sign(request);
    }

    async get() {
        const headers: Record<string, string> = {host: this.functionHostName,};
        const path = "/";
        const req = await this.createSignedRequest(headers, "GET", path);

        return await axios.get(`${this.httpSchema}${this.functionHostName}`, {
            headers: req.headers
        });
    }

    async post(body: Record<string, any>) {
        const headers: Record<string, string> = {host: this.functionHostName,};
        const path = "/";
        const req = await this.createSignedRequest(headers, "POST", path, body);

        return await axios.post(`${this.httpSchema}${this.functionHostName}`, body, {
            headers: req.headers
        });
    }
}