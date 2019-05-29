import { Http, Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAqGMtwJ4kSWYTYG8hrjHdjGZ-RmE_58S8",
    authDomain: "posthere-1552624061582.firebaseapp.com",
    databaseURL: "https://posthere-1552624061582.firebaseio.com",
    projectId: "posthere-1552624061582",
    storageBucket: "posthere-1552624061582.appspot.com",
    messagingSenderId: "875190677582",
    appId: "1:875190677582:web:3f401e757ac8add8"
}
firebase.initializeApp(firebaseConfig)
@Injectable()
export class FireDataProvider {

  urlBase = 'https://posthere-1552624061582.firebaseio.com/';
  
  
  constructor(public http: Http, public json: Jsonp) {
    console.log('Hello FireDataProvider Provider');
    
  }
  getClientes(){
    return new Promise(resolve =>{
      this.http.get('${this.urlBase}clientesCadastrados.json')
      .subscribe(res => resolve(res.json()));
    });
  }
  saveCliente(nome, cpf, email, tel){
    var ref = firebase.database().ref('clientesCadastrados').push().key;
    var updates = {};
    var postData = {
      nome: nome,
      cpf: cpf,
      email: email,
      tel: tel,
      key: ref
    }
      updates[ref] = postData;
      return firebase.database().ref('clientesCadastrados').update(updates);
      }  

      apagarCliente(key){
        firebase.database().ref('clientesCadastrados').child(key);
      }

}
