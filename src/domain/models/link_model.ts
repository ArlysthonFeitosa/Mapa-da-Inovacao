import { LinkCategory } from "./link_category_model";

export type Link = {
  id?: string,
  name: string,
  content: string,
  category?: LinkCategory,
}