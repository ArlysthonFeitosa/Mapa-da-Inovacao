import { DeleteInstitution } from "../../../domain/usecases/institution/DeleteInstitution";
import { DeleteInstitutionRepository } from "../../protocols/institution/DeleteInstitutionRepository";


export class DeleteInstitutionUsecase implements DeleteInstitution {
  constructor(
    private readonly deleteInstitutionRepository: DeleteInstitutionRepository
  ) { }

  async execute(id: DeleteInstitution.Params): Promise<DeleteInstitution.Result> {
    const result =  await this.deleteInstitutionRepository.execute(id);

    if (!result) {
      throw new Error("Não foi possível excluir a instituição")
    } else {
      return result
    }
  }
}