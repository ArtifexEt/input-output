import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { ProxyService } from './proxy.service';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProxyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
