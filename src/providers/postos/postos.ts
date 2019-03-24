import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IPosto } from '../../interfaces/IPosto';

/*
  Generated class for the PostosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PostosProvider Provider');
  }
  showTest(data:IPosto){
    return this.http.get<IPosto>('http://localhost:3000/posto/'+data.id);
  }

  allTest(){
    return this.http.get<IPosto[]>('http://localhost:3000/posto');
  }
  addTest(data:IPosto){
    return this.http.post<IPosto>('http://localhost:3000/posto', data);
  }
  editTest(data:IPosto){
    return this.http.put<IPosto>('http://localhost:3000/posto/'+data.id, data);
  }
  deleteTest(data:IPosto){
    return this.http.delete<IPosto>('http://localhost:3000/posto/'+data.id);
  }


   all(){
     let posto:IPosto[] =[
      {
        "id":1,
        "nomePosto":"Ipiranga",
        "geolocalizacao":"Rua do beijo",
        "valor":10.00,
        "vl_txt":"10,00",
        "imagem":"assets/imgs/Ipiranga.png"
      },
      {
        "id":2,
        "nomePosto":"Petrobras",
        "geolocalizacao":"Rua Getulio Vargas",
        "valor":3.60,
        "vl_txt":"3,60",
        "imagem":"assets/imgs/Petrobras.png"
      }
    ];
    return posto;
   }
}
