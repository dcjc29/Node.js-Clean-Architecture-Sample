import { SampleRepository } from "../../interfaces/repositories/sample.repository"
import { GetOneSampleUseCase } from "../../interfaces/use-cases/sample/get-one-sample.use-case"
import { SampleResponse } from "../../models/sample.model"




export class GetOneSample implements GetOneSampleUseCase {
    sampleRepository: SampleRepository
    constructor(sampleRepository: SampleRepository) {
        this.sampleRepository = sampleRepository
    }

    async execute(id: string):Promise<SampleResponse|null>{
        return await this.sampleRepository.findOne(id)
    }
}