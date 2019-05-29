import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase} from "angularfire2/database";
//import {MapaPage} from '../mapa/mapa';
import {CadastroPage} from '../cadastro/cadastro';

export interface Cadastro{
  nomePosto: string,
  end: string,
  vlr: number
  
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cad={} as Cadastro
  constructor(private afd: AngularFireDatabase, public navCtrl: NavController) {
    
  }
  cadastro(cad){
    let { nomePosto, end, vlr} = cad;
    
    //console.log(nome)
    this.afd.list('clientesCadastrados').push(cad)
    
    
  }
  openClientes(){
    this.navCtrl.push('ListaClientesPage');

  }
 


  ngOnInit(){
    navigator.geolocation.getCurrentPosition((pos)=>{
console.log(pos);
})
}
  /*abreMapa(){
    this.navCtrl.push(MapaPage);
  }*/
  abrePosto(){
    this.navCtrl.push(CadastroPage)
  }
 
}
