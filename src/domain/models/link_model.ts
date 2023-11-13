import { LinkCategory } from "./link_category_model";

export type LinkModel = {
  id?: string,
  name: string,
  content: string,
  category?: LinkCategory,
}