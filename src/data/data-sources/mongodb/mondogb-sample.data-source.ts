import { SampleRequest, SampleResponse } from "../../../domain/models/sample.model";
import { NoSQLDatabaseWrapper } from "../../interfaces/nosql.wrapper";
import { SampleDataSource } from "../../interfaces/sample.data-source";

export class MongoDBSampleDataSource implements SampleDataSource {

    private db: NoSQLDatabaseWrapper
    constructor(db: NoSQLDatabaseWrapper) {
        this.db = db
    }
    async create(data: SampleRequest): Promise<void> {
        return await this.db.insert(data)
    }
    async getAll(query: object): Promise<SampleResponse[]> {
        return await this.db.find(query)
    }
    async delete(id: String): Promise<void> {
       return await this.db.deleteOne(id)
    }
    async update(id: String, data: SampleRequest): Promise<void> {
         return await this.db.updateOne(id, data)
    }
    async getOne(id: String): Promise<SampleResponse | null> {
        return await this.db.findOne(id)
    }
}