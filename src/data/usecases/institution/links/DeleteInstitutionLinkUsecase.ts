import { DeleteInstitutionLink } from "../../../../domain/usecases/institution/links/DeleteInstitutionLink";
import { DeleteInstitutionLinkRepository } from "../../../protocols/institution/links/DeleteInstitutionLinkRepository";


export class DeleteInstitutionLinkUsecase implements DeleteInstitutionLink {
  constructor (
    private readonly deleteInstitutionLinkRepository: DeleteInstitutionLinkRepository
  ) {}

  async execute(data: DeleteInstitutionLink.Params): Promise<DeleteInstitutionLink.Result> {
    const result = await this.deleteInstitutionLinkRepository.execute(data);

    if (!result) {
      throw new Error("Não foi possível excluir o link")
    } else {
      return result
    }
  }
}