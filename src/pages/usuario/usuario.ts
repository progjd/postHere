import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  usuario:IUsuario = {name:'', email:'', password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuariosProvider: UsuariosProvider) {
  }
  addUsuario(){
    this.usuariosProvider.addUsuario(this.usuario).subscribe(res => {
      console.log(res);
    }, erro =>{
      console.log("Erro"+erro.message);
    });

  }
  voltar(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

}
