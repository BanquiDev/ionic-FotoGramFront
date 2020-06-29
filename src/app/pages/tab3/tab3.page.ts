import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interface';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from '../../services/ui-service.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario:Usuario = {}

  constructor(private usuaioService:UsuarioService,
              private uiService:UiServiceService,
              private postService:PostsService) {}

  ngOnInit(){

    this.usuario = this.usuaioService.getUsuario()

    console.log(this.usuario)
  }

  async actualizar(fActualizar:NgForm){

    if(fActualizar.invalid){return}

    const actualizado = await this.usuaioService.actualizarUsuario( this.usuario )
    console.log(actualizado)
    if(actualizado){

      this.uiService.presentToast('Registro Actualizado')
    }else{
      this.uiService.presentToast('No se pudo Actualizar')
    }

  }

  logout(){
    this.postService.paginaPosts = 0
    this.usuaioService.logout()
  }
}
