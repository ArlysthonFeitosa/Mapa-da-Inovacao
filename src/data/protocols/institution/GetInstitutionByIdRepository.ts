import { InstitutionModel } from "../../../domain/models/institution_model"

export interface GetInstitutionByIdRepository {
  execute(data: GetInstitutionByIdRepository.Params): Promise<GetInstitutionByIdRepository.Result>
}

export namespace GetInstitutionByIdRepository {
  export type Params = string
  export type Result = InstitutionModel | null
}