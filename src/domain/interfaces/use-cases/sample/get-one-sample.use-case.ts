import Sample from "../../../models/sample.model";

export interface GetOneSampleUseCase { 
    execute(id:string): Promise<Sample|null>; 
}