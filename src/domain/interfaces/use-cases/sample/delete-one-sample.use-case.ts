
export interface DeleteOneSamplesUseCase { 
    execute(id:string): Promise<void>; 
}