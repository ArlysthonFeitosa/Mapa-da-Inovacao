import { InstitutionModel } from "../../../models/institution_model"
import { LocationModel } from "../../../models/location/location_model"

export interface AddInstitutionLocation {
  execute(data: AddInstitutionLocation.Params): Promise<AddInstitutionLocation.Result>
}

export namespace AddInstitutionLocation {
  interface AddInstitutionLocationModel {
    id: string
    location: LocationModel
  }

  export type Params = AddInstitutionLocationModel
  export type Result = InstitutionModel
}