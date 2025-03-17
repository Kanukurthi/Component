import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  name:string="";
  greetingMessage:string="";
  Submit(){
    if(this.name.trim()){
      this.greetingMessage='Hello'+" "+this.name;
    }else{
      this.greetingMessage="";
    }

  }

}
