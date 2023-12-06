
export interface DeleteLocationMediaRepository {
  execute(data: DeleteLocationMediaRepository.Params): Promise<DeleteLocationMediaRepository.Result>
}

export namespace DeleteLocationMediaRepository {
  interface DeleteLocationMediaModel {
    id: string
    path?: string
  }

  export type Params = DeleteLocationMediaModel
  export type Result = boolean
}