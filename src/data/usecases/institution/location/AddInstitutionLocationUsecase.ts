import { LocationModel } from "../../../../domain/models/location/location_model";
import { AddInstitutionLocation } from "../../../../domain/usecases/institution/location/AddInstitutionLocation";
import { AddInstitutionLocationRepository } from "../../../protocols/institution/location/AddInstitutionLocationRepository";


export class AddInstitutionLocationUsecase implements AddInstitutionLocation {
  constructor(
    private readonly addInstitutionLocationRepository: AddInstitutionLocationRepository
  ) { }

  async execute(data: AddInstitutionLocation.Params): Promise<AddInstitutionLocation.Result> {
    const result = await this.addInstitutionLocationRepository.execute(data);

    if (!result) {
      throw new Error("Não foi possível adicionar a localização")
    }
    return result
  }
}