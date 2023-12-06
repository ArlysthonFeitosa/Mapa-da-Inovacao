import { InstitutionModel } from "../../../domain/models/institution_model"
import { CategoryType } from "../../../domain/types/category_type"
import { UFType } from "../../../domain/types/uf_type"

export interface GetInstitutionsRepository {
  execute(data: GetInstitutionsRepository.Params): Promise<GetInstitutionsRepository.Result>
}

export namespace GetInstitutionsRepository {
  interface GetInstitutionsModel {
    uf?: UFType
    name?: string
    category?: CategoryType
    skip?: number
    take?: number
  }
  export type Params = GetInstitutionsModel
  export type Result = InstitutionModel[] | null
}