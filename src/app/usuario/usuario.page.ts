import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../getapi.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
getdata: any []=[];

  constructor( public _services: GetapiService) 
  {
    this._services.getdata<any[]>("").subscribe(data =>
      {
      this.getdata = data
      console.log(this.getdata)
      }
      
      )

   }

  ngOnInit() {
  }

}