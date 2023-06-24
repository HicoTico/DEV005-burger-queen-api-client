import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './services/LoginService/login.service';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './views/home/home.module';
import { LoginModule } from './views/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  //TODO: Declaraciones, componentes, directivas, pipes
  declarations: [ 
    AppComponent
   
  ],
  //TODO: Solo se importan otros modulos
   //disponible todos los componentes en otros
    //se importará en todos los módulos que se vaya a usar
  imports: [  
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule, 
    HomeModule,
    LoginModule,
    BrowserAnimationsModule,
   
    ],
  providers: [
    LoginService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
