import { InstitutionModel } from "../../../../domain/models/institution_model"
import { LocationModel } from "../../../../domain/models/location/location_model"

export interface AddInstitutionLocationRepository {
  execute(data: AddInstitutionLocationRepository.Params): Promise<AddInstitutionLocationRepository.Result>
}

export namespace AddInstitutionLocationRepository {
  interface AddInstitutionLocationModel {
    id: string
    location: LocationModel
  }

  export type Params = AddInstitutionLocationModel
  export type Result = InstitutionModel | null
}