import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})

export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/Logo.jpg"; // Ensure logo.jpg is in src/assets/
  url = "https://www.bridgelabz.com";

  ngOnInit():void{
    this.title = "Hello from BridgeLabz,";
  }
  onClick(event: Event){
    console.log("Save button is clicked", event);
    window.open(this.url,"_blank");
  }
}
