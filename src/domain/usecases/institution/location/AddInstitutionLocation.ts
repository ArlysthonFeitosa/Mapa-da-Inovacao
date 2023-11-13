import { InstitutionModel } from "../../../models/institution_model"

export interface AddInstitutionLocation {
  execute(data: AddInstitutionLocation.Params): Promise<AddInstitutionLocation.Result>
}

export namespace AddInstitutionLocation {
  interface AddInstitutionLocationModel {
    id: string
    location: Location
  }

  export type Params = AddInstitutionLocationModel
  export type Result = InstitutionModel
}