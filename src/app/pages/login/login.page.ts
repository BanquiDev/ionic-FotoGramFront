import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { Usuario } from '../../interfaces/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static:true}) slides: IonSlides

 

  loginUser = {
    email:'carol@mail.om',
    password:'3333'
  }

  registerUser:Usuario = {
    email:'test',
    password:'123456',
    nombre:'test',
    avatar:'av-1.png'
  }
  constructor(private usuarioService:UsuarioService,
              private navCtrl:NavController,
              private uiService:UiServiceService) { }

  ngOnInit() {
    console.log(this.slides)
    this.slides.lockSwipes(true)
  }

  async login(fLogin: NgForm){
    
    if(fLogin.invalid){ return }

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password)

    if(valido){
      //navegar al tab
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated:true})
    }else{
      //mostrar alerta de usuario
      this.uiService.alertaInformativa('Usuario y contrasena no son correctos')
    }
  }

  async registro(fRegistro: NgForm){

    if(fRegistro.invalid){return}
    
    const valido = await this.usuarioService.registro( this.registerUser)

    if(valido){
      //navegar al tab
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated:true})
    }else{
      //mostrar alerta de usuario
      this.uiService.alertaInformativa('Ese correo electronico ya existe')
    }
  }

  
  mostrarLogin(){
      this.slides.lockSwipes(false)
      this.slides.slideTo(0)
      this.slides.lockSwipes(true)
  }

  mostrarRegistro(){
    this.slides.lockSwipes(false)
    this.slides.slideTo(1)
    this.slides.lockSwipes(true)
  }
}
