export interface RemoveInstitutionChildRepository {
  execute(data: RemoveInstitutionChildRepository.Params): Promise<RemoveInstitutionChildRepository.Result>
}

export namespace RemoveInstitutionChildRepository {
  interface RemoveInstitutionChildModel {
    institutionId: string
    childId: string
  }

  export type Params = RemoveInstitutionChildModel
  export type Result = boolean
}