import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  saludar(){
    alert('Bienvenido');
  }

  despedir(){
    alert('Hasta luego');
  }

  pantalla = 0;

  num(numero){
    this.pantalla = numero;
  }

}
