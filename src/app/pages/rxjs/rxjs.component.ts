import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import {observable, Observable, Subscription} from 'rxjs';
import {filter, map, retry} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {

    // this.regresaObservable().pipe(retry(2))
    this.subscription = this.regresaObservable()
      .subscribe(numero => {console.log('Subs', numero); },
      error => {console.log('Error'); },
      () => {console.log ('El observable terminó'); });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador ++;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if ( contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

       /* if (contador === 2) {
          // clearInterval(intervalo);
          // voy a mandar un error
          observer.error('aiura');
        }*/

      }, 1000);
    }).pipe(
      map(resp => {
        // @ts-ignore
        return resp.valor;
      }),
      filter((valor , index) => {
        // console.log('Filter', valor, index);
        if ((valor % 2 ) === 1) {
          /*IMPAR*/
          return true;
        }else {
          /*PAR*/
          return false;
        }
      })
    );

  }

}
