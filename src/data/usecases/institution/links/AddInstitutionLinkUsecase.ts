import { LinkModel } from "../../../../domain/models/link_model";
import { AddInstitutionLink } from "../../../../domain/usecases/institution/links/AddInstitutionLink";
import { AddInstitutionLinkRepository } from "../../../protocols/institution/links/AddInstitutionLinkRepository";

export class AddInstitutionLinkUsecase implements AddInstitutionLink {
  constructor(
    private readonly addInstitutionLinkRepository: AddInstitutionLinkRepository
  ) {}


  async execute(data: AddInstitutionLink.Params): Promise<AddInstitutionLink.Result> {
    const result = await this.addInstitutionLinkRepository.execute(data);

    if (!result) {
      throw new Error("Não foi possível adicionar um link")
    } 
    return result
  }
}