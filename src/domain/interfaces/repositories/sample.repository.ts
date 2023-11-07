import Sample from "../../models/sample.model";

export interface SampleRepository {
  find(query: object): Promise<Sample[] | []>;
  findOne(id: string): Promise<Sample | null>;
  create(data: Sample): Promise<Sample>;
  update(id: string, data: Sample): Promise<Sample | null>;
  delete(id: string): Promise<void>;
}