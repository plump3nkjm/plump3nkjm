import {
    DynamoDBClient,
    ScanCommand, ScanCommandInput, ScanCommandOutput,
    PutItemCommand, PutItemCommandInput, PutItemCommandOutput,
    GetItemCommand, GetItemCommandInput, GetItemCommandOutput,
    DeleteItemCommand, DeleteItemCommandInput, DeleteItemCommandOutput,
    BatchGetItemCommand, BatchGetItemCommandInput, BatchGetItemCommandOutput,
    UpdateItemCommand, UpdateItemCommandInput, UpdateItemCommandOutput, BatchWriteItemInput, BatchWriteItemCommand
} from '@aws-sdk/client-dynamodb'

export class DynamodbHandler {
    client: DynamoDBClient;
    tableName: string;

    constructor(tableName: string) {
        const config = {
            region: process.env.REACT_APP_REGION,
            credentials: {
                accessKeyId: `${process.env.REACT_APP_ACCESS_KEY}`,
                secretAccessKey: `${process.env.REACT_APP_SECRET_KEY}`
            }
        };
        this.client = new DynamoDBClient(config);
        this.tableName = tableName;
    }

    async scan(lastKey = undefined, attrName = undefined, attrValue = undefined, filterExp = undefined, limit = undefined): Promise<ScanCommandOutput> {
        const params: ScanCommandInput = {
            TableName: this.tableName,
            ExpressionAttributeNames: attrName,
            ExpressionAttributeValues: attrValue,
            FilterExpression: filterExp,
            Limit: limit,
            ExclusiveStartKey: lastKey
        }

        const command = new ScanCommand(params)

        return this.client.send(command)
    }

    async scanAll (): Promise<Array<any>> {
        let data: any = []

        const _closure = async(lastKey?: any) => {
            const params: ScanCommandInput = {
                TableName: this.tableName,
                ExclusiveStartKey: lastKey
            }

            if(lastKey) params.ExclusiveStartKey = lastKey

            const command = new ScanCommand(params)
            const {Items, LastEvaluatedKey} = await this.client.send(command)

            data.push(...Items!)

            if(LastEvaluatedKey) await _closure(LastEvaluatedKey)
        }

        await _closure()

        return data
    }
    /**
     *
     * @param itemParams<Object>
     * @returns Promise
     * usage: put({"HashKey_name": "HashKey(,"Attribute_name": "Attribute")})
     * ex.) put({'fileId': {S: 'xxxx'}})
     */
    async put(itemParams: any): Promise<PutItemCommandOutput> {
        const params: PutItemCommandInput = {
            TableName: this.tableName,
            Item: itemParams,
        }

        const command = new PutItemCommand(params)
        return this.client.send(command)
    }

    /**
     * @param itemParams <Object>
     * @returns Promise
     * usage: getItem({"key_name": {"key_type": "key_value"}})
     */
    async getItem(itemParams: any): Promise<GetItemCommandOutput> {
        const params: GetItemCommandInput = {
            TableName: this.tableName,
            Key: itemParams
        }

        const command = new GetItemCommand(params)
        return this.client.send(command)
    }

    async batchGetItem(itemParams: any): Promise<BatchGetItemCommandOutput> {
        const params: BatchGetItemCommandInput = {
            RequestItems: {
                [this.tableName]: {
                    Keys: itemParams,
                    ProjectionExpression: "ATTRIBUTE_NAME",
                }
            }
        }

        const command = new BatchGetItemCommand(params)
        return this.client.send(command)
    }

    /* ※25件ずつ送る
    * itemParams: [
    * { PutRequest: {Item: [項目のdynamodb形式（marshalledされたもの）]}}
    * ]
    * */
    async batchWriteItem(itemParams: any[]): Promise<BatchGetItemCommandOutput> {
        const params: BatchWriteItemInput = {
            RequestItems: {
                [this.tableName]: itemParams
            }
        }

        const command = new BatchWriteItemCommand(params)
        return this.client.send(command)
    }

    async delete(itemParams: any): Promise<DeleteItemCommandOutput> {
        const params: DeleteItemCommandInput = {
            TableName: this.tableName,
            Key: itemParams
        }

        const command = new DeleteItemCommand(params)

        return this.client.send(command)
    }

    /**
     * keys: {applicationId: { S: applicationId }} | marshall({applicationId})
     * updateExp: 'SET #R = :r'
     * attrNames: {"#R": "prizeResult"}
     * attrValues: {":r": { S: "落選" }} | marshall( {":r": "落選" })
     * */
    async update(keys: { [key: string]: any }, updateExp: string, attrNames: { [key: string]: any }, attrValues: { [key: string]: any }): Promise<UpdateItemCommandOutput> {
        const params: UpdateItemCommandInput = {
            TableName: this.tableName,
            Key: keys,
            UpdateExpression: updateExp,
            ExpressionAttributeNames: attrNames,
            ExpressionAttributeValues: attrValues
        }

        const command = new UpdateItemCommand(params)

        return this.client.send(command)
    }
    
    /**
     *
     * @param indexName             インデックス名
     * @param keyConditionExp       条件分
     * @param attrNames             キー名
     * @param attrValues            値
     *
     * @example
     * const data = DDBH.query('shCode-index', '#indexKey = :indexValue', {'#indexKey': 'shCode'}, {':indexValue': {S: 'ZZFA000027000'} } )
     */
    async query(indexName: string, keyConditionExp: string, attrNames: { [key: string]: any }, attrValues: { [key: string]: any }): Promise<QueryCommandOutput> {
        const params: QueryCommandInput = {
            TableName: this.tableName,
            IndexName: indexName,
            KeyConditionExpression: keyConditionExp,
            ExpressionAttributeNames: attrNames,
            ExpressionAttributeValues: attrValues,
        }

        const command = new QueryCommand(params)

        return await this.client.send(command)
    }
}