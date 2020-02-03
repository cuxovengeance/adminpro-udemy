import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  // tslint:disable-next-line:variable-name
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guaradarAjustes() {
    // console.log('Guardado en el LocalStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log('Cargando de LocalStorage');
      this.aplicarTema(this.ajustes.tema);
    } else {
        // Cuando no exista la data
      // console.log('Usando valores por defecto');
      this.aplicarTema(this.ajustes.tema);
      }
    }

  aplicarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guaradarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
