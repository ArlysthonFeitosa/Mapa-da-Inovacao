import { LocationWithInstitution } from "../../../domain/models/location/location_with_institution"
import { CategoryType } from "../../../domain/types/category_type"
import { UFType } from "../../../domain/types/uf_type"


export interface GetLocationsRepository {
  execute(data: GetLocationsRepository.Params): Promise<GetLocationsRepository.Result>
}

export namespace GetLocationsRepository {
  interface GetLocationsModel {
    uf?: UFType
    institutionName?: string
    category?: CategoryType
  }
  export type Params = GetLocationsModel
  export type Result = LocationWithInstitution[] | null
}