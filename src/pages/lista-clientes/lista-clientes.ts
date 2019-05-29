import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import {MapaPage} from '../mapa/mapa';
//import {FireDataProvider} from '../../providers/fire-data/fire-data';
//import  lod from 'lodash';
import { AngularFireDatabase, listChanges } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-lista-clientes',
  templateUrl: 'lista-clientes.html',
})
export class ListaClientesPage {

  
  todosClientes: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afd:AngularFireDatabase) {

      this.afd.object('clientesCadastrados').snapshotChanges()
      .subscribe((clientes)=>{
        this.todosClientes = [];
                
        let keys = Object.keys(clientes.payload.val())
        for (let key of keys){
          
            let items = clientes.payload.val()[key]
            items.key=key
            this.todosClientes.push(items)
         
        }
        //metodo ordenacao;
        let values:any[] = this.todosClientes;
        let object = Object.keys(values).map(key=>values[key])
        this.todosClientes = object.sort((a:any,b:any)=>a.vlr > b.vlr)
         
      })
    }
    
    apagar(key){
     // console.log(key)
      this.afd.list('clientesCadastrados/'+key).remove();
           
  }
   
   abreMapa(){
    this.navCtrl.push(MapaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaClientesPage');
  }

}
