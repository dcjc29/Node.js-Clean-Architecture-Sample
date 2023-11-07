import { SampleRepository } from "../../interfaces/repositories/sample.repository"
import { DeleteOneSamplesUseCase } from "../../interfaces/use-cases/sample/delete-one-sample.use-case"




export class DeleteSample implements DeleteOneSamplesUseCase {
    sampleRepository: SampleRepository
    constructor(sampleRepository: SampleRepository) {
        this.sampleRepository = sampleRepository
    }

    async execute(id: string):Promise<void>{
        return await this.sampleRepository.delete(id)
    }
}