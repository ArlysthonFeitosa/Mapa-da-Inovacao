import { LocationModel } from "../../../models/location/location_model"
import { MediaModel } from "../../../models/media_model"

export interface AddLocationMedia {
  execute(data: AddLocationMedia.Params): Promise<AddLocationMedia.Result>
}

export namespace AddLocationMedia {
  interface AddLocationMediaModel {
    id: string
    path?: string
  }

  export type Params = AddLocationMediaModel
  export type Result = MediaModel
}