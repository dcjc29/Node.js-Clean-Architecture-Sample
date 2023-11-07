import { SampleRepository } from "../../interfaces/repositories/sample.repository"
import { CreateSampleUseCase } from "../../interfaces/use-cases/sample/create-sample.use-case"
import { SampleRequest } from "../../models/sample.model"



export class CreateSample implements CreateSampleUseCase {
    sampleRepository: SampleRepository
    constructor(sampleRepository: SampleRepository) {
        this.sampleRepository = sampleRepository
    }

    async execute(sample: SampleRequest):Promise<void>{
        return await this.sampleRepository.create(sample)
    }
}