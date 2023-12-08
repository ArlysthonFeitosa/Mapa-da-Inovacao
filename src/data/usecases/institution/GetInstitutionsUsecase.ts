import { GetInstitutions } from "../../../domain/usecases/institution/GetInstitutions";
import { GetInstitutionsRepository } from "../../protocols/institution/GetInstitutionsRepository";


export class GetInstitutionsUsecase implements GetInstitutions {
  constructor (
    private readonly getInstitutionsRepository: GetInstitutionsRepository
  ) {}

  async execute(data: GetInstitutions.Params): Promise<GetInstitutions.Result> {
    const result = await this.getInstitutionsRepository.execute(data);

    if (!result) {
      throw new Error("Não foi possível encontrar as instituições")
    } else {
      return result
    }
  }
}