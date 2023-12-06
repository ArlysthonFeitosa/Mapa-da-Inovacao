export interface DeleteInstitutionLocationRepository {
  execute(data: DeleteInstitutionLocationRepository.Params): Promise<DeleteInstitutionLocationRepository.Result>
}

export namespace DeleteInstitutionLocationRepository {
  interface DeleteInstitutionLocationModel {
    institutionId: string
    locationId: string
  }

  export type Params = DeleteInstitutionLocationModel
  export type Result = boolean
}