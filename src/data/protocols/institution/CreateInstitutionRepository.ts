import { InstitutionModel } from "../../../domain/models/institution_model"
import { CategoryType } from "../../../domain/types/category_type"


export interface CreateInstitutionRepository {
  execute(data: CreateInstitutionRepository.Params): Promise<CreateInstitutionRepository.Result>
}

export namespace CreateInstitutionRepository {
  export type Params = {
    name: string
    categories: CategoryType[],
  }
  export type Result = InstitutionModel | null
}