import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  firstValue: String;

  buttonState = true;

  changeButtonState(){
    this.buttonState = !this.buttonState;
  }

  changeFirstValue(event){
    this.firstValue = event.target.value;
  }
}
