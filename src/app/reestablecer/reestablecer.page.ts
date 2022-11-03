import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
})
export class ReestablecerPage {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Enviado',
      message: ' ',
      buttons: ['OK'],
    });

    await alert.present();
  }
}