import { RemoveInstitutionChild } from "../../../../domain/usecases/institution/children/RemoveInstitutionChild";
import { RemoveInstitutionChildRepository } from "../../../protocols/institution/children/RemoveInstitutionChildRepository";


export class RemoveInstitutionChildUsecase implements RemoveInstitutionChild {
  constructor(
    private readonly removeInstitutionChildRepository: RemoveInstitutionChildRepository
  ) { }

  async execute(data: RemoveInstitutionChild.Params): Promise<RemoveInstitutionChild.Result> {
    const result = await this.removeInstitutionChildRepository.execute(data);

    if (!result) {
      throw new Error("Não foi possível remover a instituição filha")
    }
    return result!
  }
}