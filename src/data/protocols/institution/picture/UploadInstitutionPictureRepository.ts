import { InstitutionModel } from "../../../../domain/models/institution_model"
import { MediaModel } from "../../../../domain/models/media_model"

export interface UploadInstitutionPictureRepository {
  execute(data: UploadInstitutionPictureRepository.Params): Promise<UploadInstitutionPictureRepository.Result>
}

export namespace UploadInstitutionPictureRepository {
  interface UploadInstitutionPictureModel {
    id: string
    path?: string
  }

  export type Params = UploadInstitutionPictureModel
  export type Result = MediaModel | null
}