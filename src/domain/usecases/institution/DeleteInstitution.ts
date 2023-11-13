export interface DeleteInstitution {
  execute(data: DeleteInstitution.Params): Promise<DeleteInstitution.Result>
}

export namespace DeleteInstitution {
  export type Params = string
  export type Result = boolean
}