import { SampleRequest, SampleResponse } from "../../models/sample.model";

export interface SampleRepository {
  find(query: object): Promise<SampleResponse[] | []>;
  findOne(id: string): Promise<SampleResponse | null>;
  create(data: SampleRequest): Promise<void>;
  update(id: string, data: SampleRequest): Promise<void>;
  delete(id: string): Promise<void>;
}