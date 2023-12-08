import { InstitutionModel } from "../../../models/institution_model"

export interface AddInstitutionChild {
  execute(data: AddInstitutionChild.Params): Promise<AddInstitutionChild.Result>
}

export namespace AddInstitutionChild {
  interface AddInstitutionChildModel {
    institutionId: string
    childId: string
  }

  export type Params = AddInstitutionChildModel
  export type Result = boolean
}