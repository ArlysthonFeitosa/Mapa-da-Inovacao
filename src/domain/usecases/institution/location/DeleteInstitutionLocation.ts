export interface DeleteInstitutionLocation {
  execute(data: DeleteInstitutionLocation.Params): Promise<DeleteInstitutionLocation.Result>
}

export namespace DeleteInstitutionLocation {
  interface DeleteInstitutionLocationModel {
    institutionId: string
    locationId: string
  }

  export type Params = DeleteInstitutionLocationModel
  export type Result = boolean
}