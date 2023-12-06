export interface DeleteInstitutionRepository {
  execute(data: DeleteInstitutionRepository.Params): Promise<DeleteInstitutionRepository.Result>
}

export namespace DeleteInstitutionRepository {
  export type Params = string
  export type Result = boolean
}