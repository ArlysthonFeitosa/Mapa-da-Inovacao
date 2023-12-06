export interface DeleteInstitutionLinkRepository {
  execute(data: DeleteInstitutionLinkRepository.Params): Promise<DeleteInstitutionLinkRepository.Result>
}

export namespace DeleteInstitutionLinkRepository {
  interface DeleteInstitutionLinkModel {
    institutionId: string
    linkId: string
  }

  export type Params = DeleteInstitutionLinkModel
  export type Result = boolean
}