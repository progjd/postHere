import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import {MapaPage} from '../mapa/mapa';
import { PostosProvider } from '../../providers/postos/postos';
import { IPosto } from '../../interfaces/IPosto';



@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  posto:IPosto[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public postoProvider: PostosProvider) {
    //this.postos = this.postoProvider.all();

  }
  ionViewDidEnter(){
    this.postoProvider.allTest().subscribe(res => {
      this.posto = res;
    }, erro =>{
      console.log("Erro"+erro.message);
    });
    let data:IPosto = {
      "id":3,
      "nomePosto":"Posto Nacional",
      "geolocalizacao":"Rua do beijo",
      "valor":10.00,
      "vl_txt":"10,00",
      "imagem":"assets/imgs/Ipiranga.png"
    }

    /*this.postoProvider.addTest(data).subscribe(res => {
      console.log(res);
    }, erro =>{
      console.log("Erro"+erro.message);
    });*/
    this.postoProvider.editTest(data).subscribe(res => {
      console.log(res);
    }, erro =>{
      console.log("Erro"+erro.message);
    });
    this.postoProvider.deleteTest(data).subscribe(res => {
      console.log(res);
    }, erro =>{
      console.log("Erro"+erro.message);
    });
  }


  abreMapa(){
    this.navCtrl.push(MapaPage);
  }

  voltar(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
