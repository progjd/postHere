import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
//import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';



declare let google;

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {



  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     //private launchNavigator: LaunchNavigator
     ) {

  }

  /*carregarMapa(){
    navigator.geolocation.getCurrentPosition((pos)=>{

      let mapa = new google.maps.Map(document.getElementById('map'), {
        center: {lat:pos.coords.latitude, lng:pos.coords.longitude},
        zoom: 17
      });

      let marker = new google.maps.Marker({
        position: {
          lat:pos.coords.latitude,
          lng:pos.coords.longitude
        },
          map: mapa,
        });
    });

  }*/
  ngOnInit(){

   

    let pointA = new google.maps.LatLng(51.7519, -1.2578)
    let  pointB = new google.maps.LatLng(50.8429, -0.1313)
      let myOptions = {
        zoom: 7,
        center: pointA
      };

      
      let map = new google.maps.Map(document.getElementById('map'), myOptions)
      // Instantiate a directions service.
      //directionsService = new google.maps.DirectionsService,
      //directionsDisplay = new google.maps.DirectionsRenderer({
        //map: map
      //});
      let markerA = new google.maps.Marker({
        position: pointA,
        title: "point A",
        label: "A",
        map: map
      });
      let markerB = new google.maps.Marker({
        position: pointB,
        title: "point B",
        label: "B",
        map: map
      });

    // get route from A to B
  //calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);

  }



  calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
    directionsService.route({
      origin: pointA,
      destination: pointB,
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
