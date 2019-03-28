import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUsuario } from '../../interfaces/IUsuario';

@Injectable()
export class UsuariosProvider {

  url:string = 'http://localhost:3000/';
  headers:any;

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
    //this.headers = {"headers": {"authorization": "Bearer"}};
  }
  addUsuario(data:IUsuario){
    return this.http.post<IUsuario>(this.url+'usuarios', data);
  }

}
