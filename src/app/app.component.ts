import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FormsModule, RouterModule] 
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/Logo.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  onClick(event: Event): void {
    console.log("Save button is clicked", event);
    window.open(this.url, "_blank");
  }
}
