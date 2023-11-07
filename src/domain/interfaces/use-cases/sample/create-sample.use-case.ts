import { SampleRequest } from "../../../models/sample.model";

export interface CreateSampleUseCase { 
    execute(data:SampleRequest): Promise<void>; 
}