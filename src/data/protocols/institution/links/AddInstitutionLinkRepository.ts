import { InstitutionModel } from "../../../../domain/models/institution_model"
import { LinkModel } from "../../../../domain/models/link_model"

export interface AddInstitutionLinkRepository {
  execute(data: AddInstitutionLinkRepository.Params): Promise<AddInstitutionLinkRepository.Result>
}

export namespace AddInstitutionLinkRepository {
  interface AddInstitutionLinkModel {
    institutionId: string
    link: LinkModel
  }

  export type Params = AddInstitutionLinkModel
  export type Result = LinkModel | null
}