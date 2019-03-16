import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



declare let google;

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carregarMapa();
  }

  carregarMapa(){
    navigator.geolocation.getCurrentPosition((pos)=>{

      let mapa = new google.maps.Map(document.getElementById('map'), {
        center: {lat: pos.coords.latitude, lng: pos.coords.longitude},
        zoom: 17
      });
      var marker = new google.maps.Marker({position: {lat:pos.coords.latitude,lng:pos.coords.longitude}, map: mapa});
    })

  }


}
