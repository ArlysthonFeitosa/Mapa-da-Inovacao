import { CategoryType } from "../../models/category_type"
import { InstitutionModel } from "../../models/institution_model"

export interface CreateInstitution {
  execute(data: CreateInstitution.Params): Promise<CreateInstitution.Result>
}

export namespace CreateInstitution {
  interface CreateInstitutionModel {
    name: string
    categories: CategoryType[],
  }

  export type Params = CreateInstitutionModel
  export type Result = InstitutionModel
}