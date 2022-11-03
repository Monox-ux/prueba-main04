
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  nombre  : String;
  apellido: String;
  correo  : String;
  mensaje : String;
  contrasena: String;

  constructor(private alertController: AlertController,
              private toastController: ToastController) { }

  ngOnInit() {
  }
  async grabar(nom: HTMLInputElement, ape: HTMLInputElement, correo: HTMLInputElement , contra: HTMLInputElement)
  {
    if(nom.value == "")
    {
      this.mensaje = "Falta el nombre";
      const toast = await this.toastController.create({
        message : "Falta escribir el nombre",
        duration: 2000
      })
      toast.present();
    }
    else if(ape.value == "")
    {
      this.mensaje = "Falta el apellido";
    }
    else if(correo.value == "")
    {
      this.mensaje = "Falta el correo";
    }
    else if(contra.value == "")
    {
      this.mensaje = "Falta la contraseña";
    }
    else
    {
      this.mensaje = "";
      const alert = await this.alertController.create({
        header    : 'Mensaje de la app',
        subHeader : 'Datos ingresados',
        message   : 'Los datos fueron guardados con éxito',
        buttons   : ['Ok'],
      });
      await alert.present();
    }
    // TAREA: validar los demás datos :)
  }
  
  limpiar(nom: HTMLInputElement, ape: HTMLInputElement, correo: HTMLInputElement, contra: HTMLInputElement)
  {
    nom.value = "";
    ape.value = "";
    correo.value = "";
    contra.value = "";

  }
  
}
