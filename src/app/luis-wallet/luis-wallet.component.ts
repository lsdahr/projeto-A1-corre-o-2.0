import { Component, OnInit } from '@angular/core';
import { LuisWalletService } from '../luis-wallet.service';

@Component({
  selector: 'app-luis-wallet',
  templateUrl: './luis-wallet.component.html',
  styleUrls: ['./luis-wallet.component.css']
})
export class LuisWalletComponent implements OnInit {

  constructor(public wallet: LuisWalletService) { 

  }

  ngOnInit() {
  }

}