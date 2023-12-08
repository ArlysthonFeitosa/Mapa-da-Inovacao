import { CreateInstitution } from "../../../domain/usecases/institution/CreateInstitution";
import { CreateInstitutionRepository } from "../../protocols/institution/CreateInstitutionRepository";


export class CreateInstitutionUsecase implements CreateInstitution {
  constructor(
    private readonly createInstitutionRepository: CreateInstitutionRepository
  ) { }

  async execute(data: CreateInstitution.Params): Promise<CreateInstitution.Result> {
    const result = await this.createInstitutionRepository.execute(data);

    if (!result) {
      throw new Error("Não foi possível criar a instituição")
    } else {
      return result
    }
  }
}