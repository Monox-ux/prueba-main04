import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  correo: String;
  contrasena: String;

  constructor(private alertController: AlertController,
              private toastController: ToastController) { }

  ngOnInit() {
  }

}
