import { InstitutionModel } from "../../../models/institution_model"
import { MediaModel } from "../../../models/media_model"

export interface UploadInstitutionPicture {
  execute(data: UploadInstitutionPicture.Params): Promise<UploadInstitutionPicture.Result>
}

export namespace UploadInstitutionPicture {
  interface UploadInstitutionPictureModel {
    id: string
    path?: string
  }

  export type Params = UploadInstitutionPictureModel
  export type Result = MediaModel
}