import { Category } from "./category_model"
import { Link } from "./link_model"
import { Location } from "./location_model"
import { Media } from "./media_model"

export type InstitutionModel = {
  id?: string,
  name: string,
  picture: Media,
  description?: string,
  locations: Location[],
  categories: Category[],
  links: Link[],
}