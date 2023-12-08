import { InstitutionModel } from "../../../models/institution_model"

export interface RemoveInstitutionChild {
  execute(data: RemoveInstitutionChild.Params): Promise<RemoveInstitutionChild.Result>
}

export namespace RemoveInstitutionChild {
  interface RemoveInstitutionChildModel {
    institutionId: string
    childId: string
  }

  export type Params = RemoveInstitutionChildModel
  export type Result = boolean
}