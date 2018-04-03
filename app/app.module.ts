import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AbrirChamadoPageModule } from '../pages/abrir-chamado/abrir-chamado.module';
import { FecharChamadoPageModule } from '../pages/fechar-chamado/fechar-chamado.module';
import { ConsultarChamadoPageModule } from '../pages/consultar-chamado/consultar-chamado.module';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), AbrirChamadoPageModule, FecharChamadoPageModule, ConsultarChamadoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
