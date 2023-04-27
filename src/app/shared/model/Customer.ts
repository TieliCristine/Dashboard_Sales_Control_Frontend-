import { Address } from "./Address";
import { PersonalData } from "./PersonalData";

export interface Customer{
  id: number;
  name: string;
  birthdate: Date;
  address: Address;
  personalData: PersonalData;
}
