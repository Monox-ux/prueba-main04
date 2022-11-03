import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  personas: any;

  constructor( ){
    this.personas = [
    {
      id    : 1,
      nombre:'Estadistica Descriptiva ', 
      asistencia: '87%',
           
    },      
    {
      id    : 2,
      nombre: 'Calidad de Software',
      asistencia: '66%',
  
    },
    {
      id    : 3,
      nombre: 'Arquitectura',
      asistencia: '100%',
    
    },
    {
      id    : 4,
      nombre: 'Etica para el Trabajo ',
      asistencia: '100%',
    
    },
    {
      id    : 5,
      nombre: 'Inlges Intermedio',
      asistencia: '87%',
    
    },
    {
      id    : 6,
      nombre: 'Proceso Portafolio',
      asistencia: '92%',
     
    },
    {
      id    : 7,
      nombre: 'Programacion de Aplicaciones Moviles',
      asistencia: '100%',
      
    },

  
    ]
  }

  ngOnInit() {
  }

}
