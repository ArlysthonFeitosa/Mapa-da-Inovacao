import { MediaModel } from "../../../../domain/models/media_model"

export interface AddLocationMediaRepository {
  execute(data: AddLocationMediaRepository.Params): Promise<AddLocationMediaRepository.Result>
}

export namespace AddLocationMediaRepository {
  interface AddLocationMediaModel {
    id: string
    path?: string
  }

  export type Params = AddLocationMediaModel
  export type Result = MediaModel | null
}