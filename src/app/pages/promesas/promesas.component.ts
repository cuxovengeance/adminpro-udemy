import { Component, OnInit } from '@angular/core';
import {error} from 'util';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    /*Función que esta escuchando el resolve de la promesa*/
    this.contarTres().then(
      /*Aquí se recibe el ok de arriba*/
      // () => console.log('Terminó')
      mensaje => console.log('Terminó', mensaje)
      // tslint:disable-next-line:no-shadowed-variable
    ).catch(error => console.log('Error'));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise(((resolve, reject) => {

      let contador = 0;
      const intervalo = setInterval(() => {
        /*verificar si una variable es 3 y ahí sacar un mensaje*/
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          // @ts-ignore
          resolve('Ok');
          // reject('Hubo un error porque yo lo digo');
          clearInterval(intervalo); /*aqui mando el intervalo que quiero limpiar*/
        }
      }, 1000 );
    }));
  }

}
