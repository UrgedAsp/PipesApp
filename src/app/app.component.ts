import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private PrimeNgConfig: PrimeNGConfig){}

  ngOnInit(){
    this.PrimeNgConfig.ripple = true;
  }

  title = 'pipesApp';
  pruebaText: string = "texto de prueba";
  nombre: string = "FerNanDo HerreRa";
  valor: number = 1000;

  mostrarNombre(){
    this.nombre = "Alfredo Gutierrez";
    this.title = "Pipes"
  }

  aumentarBadge(){
    this.valor += 1;
  }

}
