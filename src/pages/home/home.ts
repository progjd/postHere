import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {MapaPage} from '../mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){
    navigator.geolocation.getCurrentPosition((pos)=>{
console.log(pos);
})
}
  abreMapa(){
    this.navCtrl.push(MapaPage);
  }


}
