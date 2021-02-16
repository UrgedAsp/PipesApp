import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent{

  constructor() { }

  // i18nSelect
  nombre: string = "Jean";
  genero: string = "masculino";
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarCliente(){
    this.nombre = 'Sofia'
    this.genero = 'femenino'
  }

  // i18nPlural
  clientes: string[] = ['Maria','Jose','Wilmer','Jean','Juan']
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  
  borrarCliente(){
    this.clientes.pop()
  }

  // KeyValuePipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa Canada'
  }

  // JSONPipe
  heroes = [
    {
      nombre: 'SuperMan',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // AsyncPipe
  miObservable = interval(1000); //0,1,2,3,4,5,6

  valorPromesa= new Promise((res,rej)=>{
    setTimeout(() => {
      res('Tenemos data de promesa')
    }, 3500);
  })

}
