import Sample from "../../../models/sample.model";

export interface GetAllSamplesUseCase { 
    execute(data:Sample): Promise<Sample>; 
}