import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio:number//siempre hay que poner el tipo de dato
  constructor(){
    this.anio=new Date().getFullYear()//Obtener el año
  }

  ngOnInit(): void {
  }

}
