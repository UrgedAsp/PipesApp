import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreLower: string = "sebastian";
  nombreUpper: string = "SEBASTIAN";
  nombreCompleto: string = "sEbAsTiAn CaStIlLo"

  fecha: Date = new Date();//Dia Actual

}
