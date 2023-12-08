import { AddInstitutionChild } from "../../../../domain/usecases/institution/children/AddInstitutionChild";
import { AddInstitutionChildRepository } from "../../../protocols/institution/children/AddInstitutionChildRepository";

export class AddInstitutionChildUsecase implements AddInstitutionChild {
  constructor(
    private readonly addInstitutionChildRepository: AddInstitutionChildRepository
  ) { }
 
  async execute(data: AddInstitutionChild.Params): Promise<AddInstitutionChild.Result> {
    const result = await this.addInstitutionChildRepository.execute(data);

    if (!result) {
      throw new Error("Não foi possível adicionar uma instituição filha")
    } 
    return result
  }
}