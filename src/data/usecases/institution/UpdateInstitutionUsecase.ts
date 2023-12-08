import { UpdateInstitution } from "../../../domain/usecases/institution/UpdateInstitution";
import { UpdateInstitutionRepository } from "../../protocols/institution/UpdateInstitutionRepository";


export class UpdateInstitutionUsecase implements UpdateInstitution {
  constructor(
    private readonly updateInstitutionRepository: UpdateInstitutionRepository
  ) { }

  async execute(data: UpdateInstitution.Params): Promise<UpdateInstitution.Result> {
    const result = await this.updateInstitutionRepository.execute(data);

    if (!result) {
      throw new Error("Não foi possível atualizar a instituição")
    } else {
      return result
    }
  }

}