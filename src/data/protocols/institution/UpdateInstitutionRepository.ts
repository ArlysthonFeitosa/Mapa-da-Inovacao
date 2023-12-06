import { InstitutionModel } from "../../../domain/models/institution_model"
import { CategoryType } from "../../../domain/types/category_type"


export interface UpdateInstitutionRepository {
  execute(data: UpdateInstitutionRepository.Params): Promise<UpdateInstitutionRepository.Result>
}

export namespace UpdateInstitutionRepository {
  interface UpdateInstitutionModel {
    id: string
    name?: string
    description?: string
    categories?: CategoryType[],
  }

  export type Params = UpdateInstitutionModel
  export type Result = InstitutionModel | null
}