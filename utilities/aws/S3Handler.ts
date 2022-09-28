import {
    S3Client,
    GetObjectCommand,
    GetObjectCommandInput,
    GetObjectCommandOutput,
    GetObjectTaggingCommand,
    PutObjectCommand,
    PutObjectCommandInput,
    PutObjectAclCommandOutput,
    PutObjectRequest,
    CopyObjectCommand,
    CopyObjectCommandInput,
    CopyObjectCommandOutput,
    DeleteObjectCommand,
    DeleteObjectCommandInput,
    DeleteObjectCommandOutput,
    ListObjectsV2Command,
    ListObjectsV2CommandInput,
    ListObjectsV2CommandOutput,
    PutObjectTaggingCommand,
} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
// import {fromIni} from "@aws-sdk/credential-provider-ini";

export class S3Handler {
    client: S3Client;
    bucketName: string;

    // ローカルで実行する場合は、fromIni経由でprofile読み込む
    constructor(bucketName: string) {
        const config = {
            region: "ap-northeast-1",
            // credentials: fromIni({profile: process.env.AWS_PROFILE!})
        };

        this.client = new S3Client(config);
        this.bucketName = bucketName;
    }

    async get(key: string): Promise<GetObjectCommandOutput> {
        const params: GetObjectCommandInput = {
            Bucket: this.bucketName,
            Key: key,
        };

        const command = new GetObjectCommand(params);

        return this.client.send(command);
    }

    async put(
        key: string,
        body: PutObjectRequest["Body"] | string | Uint8Array | Buffer,
        contentType: string = ""
    ): Promise<PutObjectAclCommandOutput> {
        const params: PutObjectCommandInput = {
            Bucket: this.bucketName,
            Key: key,
            Body: body,
            ContentType: contentType,
        };

        const command = new PutObjectCommand(params);

        return this.client.send(command);
    }

    async copy(
        key: string,
        originName: string,
        otherName: string,
        period: string
    ): Promise<CopyObjectCommandOutput> {
        const params: CopyObjectCommandInput = {
            Bucket: this.bucketName,
            CopySource: `${this.bucketName}/${period}/${key}/${originName}`,
            Key: `${period}/${key}/${otherName}`,
        };

        const command = new CopyObjectCommand(params);

        return this.client.send(command);
    }

    async delete(key: string): Promise<DeleteObjectCommandOutput> {
        const params: DeleteObjectCommandInput = {
            Bucket: this.bucketName,
            Key: key,
        };

        const command = new DeleteObjectCommand(params);

        return this.client.send(command);
    }

    /**
     * @param prefix: 引数のキー配下を検索
     * @param delimiter: 引数のキー配下以外を検索
     */
    async list(
        prefix?: string,
        continuationToken?: string,
        delimiter?: string
    ): Promise<ListObjectsV2CommandOutput> {
        const params: ListObjectsV2CommandInput = {
            Bucket: this.bucketName,
            Delimiter: delimiter,
            Prefix: prefix,
            ContinuationToken: continuationToken
        };

        const command = new ListObjectsV2Command(params);

        return this.client.send(command);
    }

    async getSignedUrl(key: string, expiresIn: number) {
        const params = {
            Bucket: this.bucketName,
            Key: key,
            Body: "BODY",
        };
        const command = new GetObjectCommand(params);
        // @ts-ignore
        return await getSignedUrl(this.client, command, {
            expiresIn,
        });
    }

    async getTag(key: string) {
        const params = {
            Bucket: this.bucketName,
            Key: key,
        };
        const command = new GetObjectTaggingCommand(params);
        return this.client.send(command);
    }

    async putTag(key: string, TagSet: Array<any>) {
        const params = {
            Bucket: this.bucketName,
            Key: key,
            Tagging: {
                TagSet,
            },
        };
        const command = new PutObjectTaggingCommand(params);
        return this.client.send(command);
    }
}
