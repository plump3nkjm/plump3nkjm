/// <reference types="node" />
import { S3Client, GetObjectCommandOutput, PutObjectAclCommandOutput, PutObjectRequest, CopyObjectCommandOutput, DeleteObjectCommandOutput, ListObjectsV2CommandOutput } from '@aws-sdk/client-s3';
export declare class S3 {
    client: S3Client;
    bucketName: string;
    constructor(bucketName: string);
    get(key: string): Promise<GetObjectCommandOutput>;
    put(key: string, body: PutObjectRequest["Body"] | string | Uint8Array | Buffer, contentType?: string): Promise<PutObjectAclCommandOutput>;
    copy(key: string, originName: string, otherName: string, period: string): Promise<CopyObjectCommandOutput>;
    delete(key: string): Promise<DeleteObjectCommandOutput>;
    /**
     * @param prefix: 引数のキー配下を検索
     * @param delimiter: 引数のキー配下以外を検索
     */
    list(prefix?: string, delimiter?: string): Promise<ListObjectsV2CommandOutput>;
}
