import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario.model';
import {UsuarioService} from '../../services/service.index';
import Swal from 'sweetalert2';
import {ModalUploadService} from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor( public _usuarioServices: UsuarioService,
               public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
    this.cargarUsuarios();

    this._modalUploadService.notificacion.subscribe(resp => this.cargarUsuarios());
  }

  cargarUsuarios() {
    this.cargando = true;

    this._usuarioServices.cargarUsuarios(this.desde)
      .subscribe((resp: any) => {
        console.log(resp);
        this.totalRegistros = resp.total;
        this.usuarios = resp.usuarios;
        this.cargando = false;
      });
  }

  cambiarDesde(valor: number) {
    let desde = this.desde + valor;
    console.log(desde);

    if ( desde >= this.totalRegistros) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();

  }

  buscarUsuario(termino: string) {
    // console.log(termino);

    if (termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;

    this._usuarioServices.buscarUsuario(termino)
      .subscribe((usuarios: Usuario []) => {
        // console.log(usuarios);
        this.usuarios = usuarios;
        this.cargando = false;
      });
  }

  borrarUsuario(usuario: Usuario) {
    // console.log(usuario);
    if (usuario._id === this._usuarioServices.usuario._id) {
      Swal.fire('No puede borrar usuario' , 'No se puede borrar así mismo', 'error');
      return;
    }

    Swal.fire({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar al usuario ' + usuario.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then( borrar  => {
      if (borrar) {
        this._usuarioServices.borrarUsuario(usuario._id)
          .subscribe(borrardo => {
            console.log(borrardo);
            this.cargarUsuarios();

            Swal.fire('Usuario Borrado!', 'El usuario ha sido borrado con exito.', 'success');
          });
      }
    });
  }

  guardarUsuario(usuario: Usuario) {
    this._usuarioServices.actualizarUsuario(usuario)
      .subscribe();
  }

  mostrarModal(id: string) {
    this._modalUploadService.mostrarModal( 'usuarios' , id);
  }

}
