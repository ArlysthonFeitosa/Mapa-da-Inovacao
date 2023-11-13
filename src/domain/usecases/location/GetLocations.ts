import { CategoryType } from "../../types/category_type"
import { LocationWithInstitution } from "../../models/location/location_with_institution"
import { UFType } from "../../types/uf_type"

export interface GetLocations {
  execute(data: GetLocations.Params): Promise<GetLocations.Result>
}

export namespace GetLocations {
  interface GetLocationsModel {
    uf?: UFType
    institutionName?: string
    category?: CategoryType
  }
  export type Params = GetLocationsModel
  export type Result = LocationWithInstitution[]
}