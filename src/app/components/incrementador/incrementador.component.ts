import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // @ts-ignore
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter <number> = new EventEmitter();

  constructor() {
    // console.log('Progreso' , this.porcentaje);
  }

  ngOnInit() {
    // console.log('Progreso' , this.porcentaje);
  }

  // @ts-ignore
  onChange(newValue: number) {
    /*ESTO YA NO VA porque ocuparé la referencia txtProgress*/
    // const elemHTML: any = document.getElementsByName('porcentaje')[0];
    // console.log(elemHTML.value);

    if ( newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    // elemHTML.value = Number(this.porcentaje);
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  cambialValor(valor) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);

  }

}
