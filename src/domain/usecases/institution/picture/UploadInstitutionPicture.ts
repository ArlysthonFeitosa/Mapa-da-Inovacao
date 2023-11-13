import { InstitutionModel } from "../../../models/institution_model"

export interface UploadInstitutionPicture {
  execute(data: UploadInstitutionPicture.Params): Promise<UploadInstitutionPicture.Result>
}

export namespace UploadInstitutionPicture {
  interface UploadInstitutionPictureModel {
    id: string
    path?: string
  }

  export type Params = UploadInstitutionPictureModel
  export type Result = InstitutionModel
}