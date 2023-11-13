import { CategoryType } from "../../models/category_type"
import { InstitutionModel } from "../../models/institution_model"

export interface UpdateInstitution {
  execute(data: UpdateInstitution.Params): Promise<UpdateInstitution.Result>
}

export namespace UpdateInstitution {
  interface UpdateInstitutionModel {
    id: string
    name?: string
    description?: string
    categories?: CategoryType[],
  }

  export type Params = UpdateInstitutionModel
  export type Result = InstitutionModel
}