import { MediaPackageClient, ListOriginEndpointsCommand } from "@aws-sdk/client-mediapackage";

export class MediaPackageHandler {
    client: MediaPackageClient;

    constructor() {
        const config = {
            region: 'ap-northeast-1',
            apiVersion: '2017-10-14'
        }

        this.client = new MediaPackageClient(config)
    }

    async listOriginEndpoints() {
        const command = new ListOriginEndpointsCommand({});
        return await this.client.send(command);
    }

}
