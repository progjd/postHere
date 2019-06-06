import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';



declare let google;

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
  providers:[LaunchNavigator]
})
export class MapaPage {



  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private launchNavigator: LaunchNavigator
     ) {

  }

 
  ngOnInit(){

    let options: LaunchNavigatorOptions = {
      start: 'London, ON',
      app: this.launchNavigator.APP.GOOGLE_MAPS
    }
    this.launchNavigator.navigate('Toronto, ON', options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );


  }

}
