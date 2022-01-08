import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(){
  }
  val1 = "Pass the service to the client."
  val2 = "Software design"
  d1:string = "";
  d2:string = "";
  c:number = 0;
  RegisterStudent(studentForm: NgForm): void {   
    this.d1 = studentForm.value.q1;
    this.d2 = studentForm.value.q2;
    if(this.val1==this.d1 && this.val2==this.d2){
      this.c+=2;
    }
    else if(this.val1==this.d1 || this.val2==this.d2){
      this.c+=1;
    }
    else{
      this.c+=0;
    }
    console.log("Your score is : "+this.c*10);
  }
}