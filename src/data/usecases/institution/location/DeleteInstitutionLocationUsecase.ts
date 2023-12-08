import { DeleteInstitutionLocation } from "../../../../domain/usecases/institution/location/DeleteInstitutionLocation";
import { DeleteInstitutionLocationRepository } from "../../../protocols/institution/location/DeleteInstitutionLocationRepository";


export class DeleteInstitutionLocationUsecase implements DeleteInstitutionLocation {
  constructor(
    private readonly deleteInstitutionLocationRepository: DeleteInstitutionLocationRepository
  ) { }

  async execute(data: DeleteInstitutionLocation.Params): Promise<DeleteInstitutionLocation.Result> {
    const result = await this.deleteInstitutionLocationRepository.execute(data);

    if (!result) {
      throw new Error("Não foi possível excluir a localização")
    }
    return result
  }
}