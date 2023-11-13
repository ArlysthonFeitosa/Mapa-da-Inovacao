import { InstitutionModel } from "../../models/institution_model"
import { LocationWithInstitution } from "../../models/location/location_with_institution"
import { UFType } from "../../models/uf_type"

export interface GetLocationsByUF {
  execute(data: GetLocationsByUF.Params): Promise<GetLocationsByUF.Result>
}

export namespace GetLocationsByUF {
  export type Params = UFType
  export type Result = LocationWithInstitution[]
}