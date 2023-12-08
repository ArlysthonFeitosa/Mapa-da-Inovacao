export interface AddInstitutionChildRepository {
  execute(data: AddInstitutionChildRepository.Params): Promise<AddInstitutionChildRepository.Result>
}

export namespace AddInstitutionChildRepository {
  interface AddInstitutionChildModel {
    institutionId: string
    childId: string
  }

  export type Params = AddInstitutionChildModel
  export type Result = boolean
}