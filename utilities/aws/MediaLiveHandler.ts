import {
    MediaLiveClient,
    ListChannelsCommand,
    ListInputsCommand,
    StartChannelCommand,
    StartChannelCommandInput,
    StopChannelCommand,
    StopChannelCommandInput,
    ListInputsCommandInput,
    ListInputsCommandOutput,
} from '@aws-sdk/client-medialive'

export class MediaLiveHandler {
    client: MediaLiveClient

    constructor() {

        const config = {
            region: 'ap-northeast-1',
            apiVersion: '2017-10-14'
        }

        this.client = new MediaLiveClient(config)
    }

    async listChannels() {
        const command = new ListChannelsCommand({});
        return await this.client.send(command);
    }

    async listInputs() {
        const command = new ListInputsCommand({});
        return await this.client.send(command)
    }

    async startChannel(channelId: string) {
        const inputs: StartChannelCommandInput = {ChannelId: channelId};
        const command = new StartChannelCommand(inputs)
        return await this.client.send(command)
    }

    async stopChannel(channelId: string) {
        const inputs: StopChannelCommandInput = {ChannelId: channelId};
        const command = new StopChannelCommand(inputs)
        return await this.client.send(command)
    }
}
