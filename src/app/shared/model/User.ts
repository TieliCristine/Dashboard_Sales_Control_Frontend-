import {AccessLvl} from "./AccessLvl";

export interface User{
  id: number;
  email: string;
  password: string;
  cpf: string;
  name: string;
  birthdate: Date;
  jobPosition: string;
  accessLvl: AccessLvl;
}
