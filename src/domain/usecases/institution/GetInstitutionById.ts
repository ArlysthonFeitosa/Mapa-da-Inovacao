import { InstitutionModel } from "../../models/institution_model"

export interface GetInstitutionById {
  execute(data: GetInstitutionById.Params): Promise<GetInstitutionById.Result>
}

export namespace GetInstitutionById {
  export type Params = string
  export type Result = InstitutionModel
}