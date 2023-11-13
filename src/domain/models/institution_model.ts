import { CategoryType } from "./category_model"
import { Link as LinkModel } from "./link_model"
import { LocationModel } from "./location_model"
import { MediaModel } from "./media_model"

export type InstitutionModel = {
  id?: string,
  name: string,
  picture: MediaModel,
  description?: string,
  locations: LocationModel[],
  categories: CategoryType[],
  links: LinkModel[],
  childOf: InstitutionModel[],
  children: InstitutionModel[],
}