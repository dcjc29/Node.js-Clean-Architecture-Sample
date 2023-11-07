import { SampleRepository } from "../../interfaces/repositories/sample.repository"
import { UpdateOneSamplesUseCase } from "../../interfaces/use-cases/sample/update-one-sample.use-case"
import { SampleRequest } from "../../models/sample.model"




export class UpdateSample implements UpdateOneSamplesUseCase {
    sampleRepository: SampleRepository
    constructor(sampleRepository: SampleRepository) {
        this.sampleRepository = sampleRepository
    }

    async execute(id: string,sample:SampleRequest):Promise<void>{
        return await this.sampleRepository.update(id,sample)
    }
}