import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//mis componentes
import{HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { PipesModule } from './pipes/pipes.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [],
  imports: [ComponentsModule ,PipesModule, HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
