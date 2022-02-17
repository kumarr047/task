import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycrudapi';

  constructor(private route : Router){
    
  }

  //list
  toList(){
    this.route.navigate(['/list']);
  }

  //update 
  toUpdate(){
    // this.route.navigate(['/edit']);
  }

  //create or register
  toRegister(){
    this.route.navigate(['/register']);
  }
}
