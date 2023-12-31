import { CategoryType } from "../../types/category_type"
import { InstitutionModel } from "../../models/institution_model"
import { UFType } from "../../types/uf_type"

export interface GetInstitutions {
  execute(data: GetInstitutions.Params): Promise<GetInstitutions.Result>
}

export namespace GetInstitutions {
  interface GetInstitutionsModel {
    uf?: UFType
    name?: string
    category?: CategoryType
    skip?: number
    take?: number
  }
  export type Params = GetInstitutionsModel
  export type Result = InstitutionModel[]
}