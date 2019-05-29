import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { UsuarioPage } from '../pages/usuario/usuario';
import {AngularFireModule} from "angularfire2"
import {MapaPage} from '../pages/mapa/mapa';
import { PostosProvider } from '../providers/postos/postos';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import {HttpModule, JsonpModule} from '@angular/http';

//import { FireDataProvider } from '../providers/fire-data/fire-data';
import { AngularFireDatabase } from 'angularfire2/database';
import { ListaClientesPage } from '../pages/lista-clientes/lista-clientes';

export const firebaseConfig = {
  apiKey: "AIzaSyAqGMtwJ4kSWYTYG8hrjHdjGZ-RmE_58S8",
    authDomain: "posthere-1552624061582.firebaseapp.com",
    databaseURL: "https://posthere-1552624061582.firebaseio.com",
    projectId: "posthere-1552624061582",
    storageBucket: "posthere-1552624061582.appspot.com",
    messagingSenderId: "875190677582",
    appId: "1:875190677582:web:3f401e757ac8add8"
}


@NgModule({
  declarations: [
    MyApp,
    ListaClientesPage,
    HomePage,
    MapaPage,
    CadastroPage,
    UsuarioPage

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaClientesPage,
    HomePage,
    MapaPage,
    CadastroPage,
    UsuarioPage

  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostosProvider,
    UsuariosProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
