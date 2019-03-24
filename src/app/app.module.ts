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

import {MapaPage} from '../pages/mapa/mapa';
import { PostosProvider } from '../providers/postos/postos';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    CadastroPage,
    UsuarioPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    CadastroPage,
    UsuarioPage

  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostosProvider
  ]
})
export class AppModule {}
