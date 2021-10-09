import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LuisCurrencyComponent } from './luis-currency/luis-currency.component';
import { LuisWalletComponent } from './luis-wallet/luis-wallet.component';
import { RouterModule } from '@angular/router';
import { LuisWalletService } from './luis-wallet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(
      [
      {path: 'currency', component: LuisCurrencyComponent},
      {path: 'wallet', component: LuisWalletComponent}
      ]
    ),
    HttpClientModule
  ],
  declarations: [ AppComponent, HelloComponent, LuisCurrencyComponent, LuisWalletComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LuisWalletService]
})
export class AppModule { }
