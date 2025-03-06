import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})

export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/Logo.jpg"; // Ensure logo.jpg is in src/assets/


  ngOnInit():void{
    this.title = "Hello from BridgeLabz,";
  }
}
