import { SampleRepository } from "../interfaces/repositories/sample.repository";
import { SampleDataSource } from "../../data/interfaces/sample.data-source";
import { SampleRequest, SampleResponse } from "../models/sample.model";

export class SampleRepositoryImpl implements SampleRepository {
    sampleDataSource: SampleDataSource
    constructor(sampleDataSource: SampleDataSource) {
        this.sampleDataSource = sampleDataSource
    }
    
    async find(query: object): Promise<SampleResponse[] | []>{
        return await this.sampleDataSource.getAll(query);
    }
    async findOne(id: string): Promise<any> {
       return await this.sampleDataSource.getOne(id);
    }
    async create(data: SampleRequest): Promise<void> {
        return await this.sampleDataSource.create(data);
    }
    async update(id: string, data: SampleRequest): Promise<void> {
        return await this.sampleDataSource.update(id,data);
    }
    async delete(id: string): Promise<void> {
       return await this.sampleDataSource.delete(id);
    }
}