import { LocationModel } from "../../../../domain/models/location/location_model"

export interface AddLocationMediaRepository {
  execute(data: AddLocationMediaRepository.Params): Promise<AddLocationMediaRepository.Result>
}

export namespace AddLocationMediaRepository {
  interface AddLocationMediaModel {
    id: string
    path?: string
  }

  export type Params = AddLocationMediaModel
  export type Result = LocationModel | null
}