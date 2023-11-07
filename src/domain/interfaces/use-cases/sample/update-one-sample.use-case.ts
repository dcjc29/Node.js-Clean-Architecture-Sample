import Sample from "../../../models/sample.model";

export interface UpdateOneSamplesUseCase { 
    execute(id:string,data:Sample): Promise<Sample>; 
}