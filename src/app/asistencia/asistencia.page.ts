import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})

export class AsistenciaPage implements OnInit {
  personas : any;


  constructor() {
    this.personas = [
      {
        id    : 1,
        nombre:'Juan Quevedo ', 
        asistencia: '87%',
        foto  : 'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000',
        
      },      
      {
        id    : 2,
        nombre: 'Juana Espina',
        asistencia: '66%',
         foto  : 'https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-260nw-2018571389.jpg'
      },
      {
        id    : 3,
        nombre: 'Pedro Guzman',
        asistencia: '100%',
        foto  : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000'
      },
      {
        id    : 4,
        nombre: 'Nicolas Fuentes',
        asistencia: '100%',
        foto  : 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000'
      },
      {
        id    : 5,
        nombre: 'Diego Alcantara',
        asistencia: '87%',
        foto  : 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id    : 6,
        nombre: 'Matias Pedrozo',
        asistencia: '92%',
        foto  : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id    : 7,
        nombre: 'Natalia Quiroz',
        asistencia: '100%',
        foto  : 'https://mobimg.b-cdn.net/v3/fetch/e5/e51519e09cbf96860d4b779ce570ed49.jpeg'
      },

    
      ]
   } 

  ngOnInit() {
  }

}