import { InstitutionModel } from "../../../domain/models/institution_model";
import { GetInstitutionById } from "../../../domain/usecases/institution/GetInstitutionById";
import { GetInstitutionByIdRepository } from "../../protocols/institution/GetInstitutionByIdRepository";


export class GetInstitutionByIdUsecase implements GetInstitutionById {
  constructor(
    private readonly getInstitutionByIdRepository: GetInstitutionByIdRepository
  ) { }

  async execute(id: GetInstitutionById.Params): Promise<GetInstitutionById.Result> {
    const result = await this.getInstitutionByIdRepository.execute(id);

    if (!result) {
      throw new Error("Não foi possível encontrar a instituição")
    } else {
      return result
    }
  }

}