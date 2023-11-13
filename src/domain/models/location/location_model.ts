import { UFType } from "../uf_type";

export type LocationModel = {
  id?: string,
  lat?: number,
  long?: number,
  uf?: UFType,
  city?: string,
  district?: string,
  street?: string,
  number?: string,
  complement?: string,
  postalCode?: string,
}