import { SampleRepository } from "../../interfaces/repositories/sample.repository"
import { GetAllSamplesUseCase } from "../../interfaces/use-cases/sample/get-all-samples.use-case"
import { SampleResponse } from "../../models/sample.model"




export class GetAllSamples implements GetAllSamplesUseCase {
    sampleRepository: SampleRepository
    constructor(sampleRepository: SampleRepository) {
        this.sampleRepository = sampleRepository
    }

    async execute(query: object):Promise<SampleResponse[]|[]>{
        return await this.sampleRepository.find(query)
    }
}