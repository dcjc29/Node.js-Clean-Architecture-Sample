import { SampleRequest, SampleResponse } from "../../domain/models/sample.model";

export interface SampleDataSource {
    create(data: SampleRequest): Promise<void>;
    getAll(query:object): Promise<SampleResponse[]>;
    delete(id: String): Promise<void>;
    update(id: String, data: SampleRequest): Promise<void>;
    getOne(id: String): Promise<SampleResponse | null>;
}