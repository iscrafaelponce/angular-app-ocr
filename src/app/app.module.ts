import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeFileComponent } from './home-file/home-file.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { OutPutTextComponent } from './out-put-text/out-put-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeFileComponent,
    SideBarComponent,
    HeaderComponent,
    OutPutTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
