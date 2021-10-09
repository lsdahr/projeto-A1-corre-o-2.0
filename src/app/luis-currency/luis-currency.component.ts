import { Component, OnInit } from '@angular/core';
import { LuisWalletService } from '../luis-wallet.service';

@Component({
  selector: 'app-luis-currency',
  templateUrl: './luis-currency.component.html',
  styleUrls: ['./luis-currency.component.css']
})
export class LuisCurrencyComponent implements OnInit {

  constructor(public wallet: LuisWalletService) { 

  }

  ngOnInit() {
  }

}