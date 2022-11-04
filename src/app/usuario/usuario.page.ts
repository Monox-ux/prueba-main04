import { Component, OnInit } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { GetapiService } from '../getapi.service';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
getdata: any []=[];
users: any = [];
searchdUser: any;

  constructor(
    private http: HttpClient,
    public _services: GetapiService) 

  {
    this._services.getdata<any[]>("").subscribe(data =>
      {
      this.getdata = data
      console.log(this.getdata)
      }
      
      )

   }

  ngOnInit() {
    console.log("hola");
    this.getUsers().subscribe(res=>{
    console.log("Res", res)
    });
  }

  getUsers()
  {
    return this.http
    .get("https://jsonplaceholder.typicode.com/posts")
    .pipe
    (map((res:any)=>{
      return res.data;
     })
    )
  }


  searchCustomer(event){
    const number = event.target.value;
    this.getdata = this.users;
    if(number && number.trim() !=''){
      this.getdata = this.getdata.filter((user: any)=>
      {
        return(user.name.toLowerCase().indexOf(number.toLowercase())>-1); 
      })
    }
  }











}