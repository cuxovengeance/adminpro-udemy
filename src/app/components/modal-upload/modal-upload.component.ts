import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {SubirArchivoService} from '../../services/subir-archivo/subir-archivo.service';
import {ModalUploadService} from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  // oculto: string = '';
  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;

  constructor(public _subirArchivoService: SubirArchivoService,
              public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;

    this._modalUploadService.ocultarModal();
  }

  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    // console.log(archivo);

    if (archivo.type.indexOf('image') < 0 ) {
      Swal.fire('Solo Imagenes' , 'El Archivo seleccionado NO es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;

    /*Javascript nativo*/
    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;
  }

  subirImagen() {
    this._subirArchivoService.subirArchivo( this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id)
      .then(resp => {
        console.log(resp);
        this._modalUploadService.notificacion.emit(resp);
        // this._modalUploadService.ocultarModal();
        this.cerrarModal();
      })
      .catch((err) => {
        console.log('Error en la carga...');
      });
  }

}
