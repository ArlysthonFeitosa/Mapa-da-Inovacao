import { InstitutionModel } from "../../../models/institution_model"

export interface DeleteInstitutionLink {
  execute(data: DeleteInstitutionLink.Params): Promise<DeleteInstitutionLink.Result>
}

export namespace DeleteInstitutionLink {
  interface DeleteInstitutionLinkModel {
    institutionId: string
    linkId: string
  }

  export type Params = DeleteInstitutionLinkModel
  export type Result = InstitutionModel
}