
export interface DeleteLocationMedia {
  execute(data: DeleteLocationMedia.Params): Promise<DeleteLocationMedia.Result>
}

export namespace DeleteLocationMedia {
  interface DeleteLocationMediaModel {
    id: string
    path?: string
  }

  export type Params = DeleteLocationMediaModel
  export type Result = boolean
}