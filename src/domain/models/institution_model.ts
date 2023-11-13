import { CategoryType } from "./category_type"
import { LinkModel as LinkModel } from "./link_model"
import { LocationModel } from "./location_model"
import { MediaModel } from "./media_model"

export type InstitutionModel = {
  id?: string,
  name: string,
  description?: string,
  categories: CategoryType[],
  picture?: MediaModel,
  locations: LocationModel[],
  links: LinkModel[],
  childOf: InstitutionModel[],
  children: InstitutionModel[],
}