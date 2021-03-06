import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario.model';
import {UsuarioService} from '../../services/service.index';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor( public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

}
