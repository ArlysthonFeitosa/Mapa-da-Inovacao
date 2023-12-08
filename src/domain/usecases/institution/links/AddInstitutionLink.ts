import { LinkModel } from "../../../models/link_model"

export interface AddInstitutionLink {
  execute(data: AddInstitutionLink.Params): Promise<AddInstitutionLink.Result>
}

export namespace AddInstitutionLink {
  interface AddInstitutionLinkModel {
    institutionId: string
    link: LinkModel
  }

  export type Params = AddInstitutionLinkModel
  export type Result = LinkModel
}