import { UFType } from "../../types/uf_type"
import { LocationModel } from "../../models/location/location_model"

export interface UpdateLocation {
  execute(data: UpdateLocation.Params): Promise<UpdateLocation.Result>
}

export namespace UpdateLocation {
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
  export type Result = LocationModel
}