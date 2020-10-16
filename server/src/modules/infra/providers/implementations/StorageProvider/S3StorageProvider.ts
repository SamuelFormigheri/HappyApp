import fs from 'fs';
import path from 'path';
import aws, {S3} from 'aws-sdk';
import uploadConfig from '@config/upload';

import IStorageProvider from '../../models/StorageProvider/IStorageProvider';
import mime from 'mime';

export default class S3StorageProvider implements IStorageProvider{
    private client: S3;

    constructor(){
        this.client = new aws.S3({
            region: 'us-east-1'
        });
    }

    public async saveFile(file:string): Promise<string>{
        const originalPath = path.resolve(uploadConfig.directory, file);

        const ContentType = mime.getType(originalPath);

        if(!ContentType) throw new Error("File not found!");

        const fileContent = await fs.promises.readFile(originalPath);

        //Configurações definidas no aws
        await this.client.putObject({
           Bucket: uploadConfig.config.aws.bucket,
           Key: file,
           ACL: 'public-read',
           Body: fileContent,
           ContentType: ContentType
        }).promise();

        await fs.promises.unlink(originalPath);
        
        return file;
    }
    public async deleteFile(file:string): Promise<void>{
        await this.client.deleteObject({
            Bucket: uploadConfig.config.aws.bucket,
            Key: file
        }).promise();
    }
}