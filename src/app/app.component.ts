import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  handleEvent(event:Event){
    console.log('Event Called: ',event.type);
    console.log('Value Entered: ',(event.target as HTMLInputElement).value);
  }
}
