import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryLayoutComponent } from './shared/components/entry-layout/entry-layout.component';

import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, EntryLayoutComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
