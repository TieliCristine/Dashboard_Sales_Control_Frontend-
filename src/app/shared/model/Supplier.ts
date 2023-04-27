import { Address } from "./Address";
import { PersonalData } from "./PersonalData";

export interface Supplier{
  id: number;
  corporativeName: string;
  salesRepresentative: string;
  address: Address;
  personalData: PersonalData;
}
