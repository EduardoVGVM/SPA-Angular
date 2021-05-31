import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName!: string;
  userEmail!: string;

  constructor() { }

  ngOnInit(): void {
    this.userName = 'Usuário Padrão';
    this.userEmail = "@EmailPadrão"
  }

  set Name(value: string){
    this.userName = value;
  }

  get Name(){
    return this.userName;
  }

  set Email(value: string){
    this.userEmail = value;
  }

  get Email(){
    return this.userEmail;
  }
}
