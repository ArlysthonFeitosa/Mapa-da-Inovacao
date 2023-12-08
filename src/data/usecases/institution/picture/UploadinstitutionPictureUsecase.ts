import { MediaModel } from "../../../../domain/models/media_model";
import { UploadInstitutionPicture } from "../../../../domain/usecases/institution/picture/UploadInstitutionPicture";
import { UploadInstitutionPictureRepository } from "../../../protocols/institution/picture/UploadInstitutionPictureRepository";


export class UploadInstitutionPictureUsecase implements UploadInstitutionPicture {
  constructor(
    private readonly uploadInstitutionPictureRepository: UploadInstitutionPictureRepository
  ) { }

  async execute(data: UploadInstitutionPicture.Params): Promise<UploadInstitutionPicture.Result> {
    const result = await this.uploadInstitutionPictureRepository.execute(data);

    if (!result) {
      throw new Error("Não foi possível atualizar foto da instituição")
    }
    return result
  }
}