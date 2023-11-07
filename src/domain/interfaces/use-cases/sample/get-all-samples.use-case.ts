import Sample from "../../../models/sample.model";

export interface GetAllSamplesUseCase { 
    execute(query:object): Promise<Sample[]|[]>; 
}