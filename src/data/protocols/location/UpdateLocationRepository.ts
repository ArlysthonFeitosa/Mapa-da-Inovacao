import { LocationModel } from "../../../domain/models/location/location_model"
import { UFType } from "../../../domain/types/uf_type"

export interface UpdateLocationRepository {
  execute(data: UpdateLocationRepository.Params): Promise<UpdateLocationRepository.Result>
}

export namespace UpdateLocationRepository {
  interface UpdateLocationModel {
    id: string
    lat?: number,
    long?: number,
    uf?: UFType,
    city?: string,
    district?: string,
    street?: string,
    number?: string,
    complement?: string,
    postalCode?: string,
  }

  export type Params = UpdateLocationModel
  export type Result = LocationModel | null
}