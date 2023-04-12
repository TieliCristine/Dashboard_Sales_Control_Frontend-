import { Injectable } from '@angular/core';
import {User} from "../../shared/model/User";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  sessionStorage: Storage;
  filter : string[]

  constructor() {
    this.sessionStorage = window.sessionStorage;
    this.filter = [];
  }

  set(key: string, value: any): boolean {
    if (this.sessionStorage) {
      this.sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.sessionStorage) {
      let stringItem = this.sessionStorage.getItem(key);
      return stringItem ? JSON.parse(stringItem) : '';
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.sessionStorage) {
      this.sessionStorage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.sessionStorage) {
      this.sessionStorage.clear();
      return true;
    }
    return false;
  }

  saveUserOnSession(user: User) {

    // const filteredCliente = this.getFilteredClienteBpo(acessoDto.cliente);
    // const filteredOperador = acessoDto.operador ? this.getFilteredOperador(acessoDto.operador) : undefined;
    //
    // acessoDto.cliente && sessionStorage.setItem('clienteBpo', JSON.stringify(filteredCliente));
    // acessoDto.operador && sessionStorage.setItem('operador', JSON.stringify(filteredOperador));
    // acessoDto.usuario && sessionStorage.setItem('usuario', JSON.stringify(acessoDto.usuario));
    // acessoDto.token && sessionStorage.setItem('token', JSON.stringify(acessoDto.token));
    // acessoDto.tipo && sessionStorage.setItem('tipo', JSON.stringify(acessoDto.tipo));
  }

  // getFilteredClienteBpo(clienteBpo: ClienteBpo) {
  //   const filteredCliente : Partial<ClienteBpo> = {}
  //   for (const key in clienteBpo) {
  //     if (!this.filtro.includes(key)) {
  //       filteredCliente[key] = clienteBpo[key];
  //     }
  //   }
  //   return filteredCliente;
  // }

  // getFilteredOperador(operador: Operador) {
  //   const filteredOperador : Partial<Operador> = {};
  //   for(const key in operador) {
  //     if(!this.filtro.includes(key)){
  //       filteredOperador[key] = operador[key];
  //     }
  //   }
  //   return filteredOperador;
  // }


}
