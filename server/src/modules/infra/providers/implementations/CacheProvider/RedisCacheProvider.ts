import Redis, {Redis as RedisClient} from 'ioredis';
import cacheConfig from '@config/cache';
import ICacheProvider from '../../models/CacheProvider/ICacheProvider';

export default class RedisCacheProvider implements ICacheProvider{
    private client: RedisClient;

    constructor(){
        this.client = new Redis(cacheConfig.config.redis);
    }

    public async save(key: string, value: any): Promise<void>{
        await this.client.set(key, JSON.stringify(value));
    };

    public async get<T>(key: string): Promise<T | null>{
        const data = await this.client.get(key);

        if(!data){
            return null;
        }

        const parsedData = JSON.parse(data) as T;

        return parsedData;
    };

    public async delete(key: string): Promise<void>{
        await this.client.del(key);
    };

    public async deletePrefix(prefix: string): Promise<void>{
        const keys = await this.client.keys(`${prefix}:*`);

        const pipeline = this.client.pipeline();

        keys.forEach(key=>{
            pipeline.del(key);
        });

        await pipeline.exec();
    };
}