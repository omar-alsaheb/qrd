import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qrd';
  loanAmount =17000;
  loanYears = 5;
  bank = 8140

  res=0;

  calculateLoan() { 
  //  this.res = this.loanAmount * 0.465 / this.loanYears;
  this.res = this.loanAmount * 0.0465 * this.loanYears;
  this.res = this.res + this.loanAmount;
  this.res = this.res / (this.loanYears * 12);

  }
  
}


