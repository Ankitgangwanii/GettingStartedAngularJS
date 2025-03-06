import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FormsModule, RouterModule]  // ✅ Ensure FormsModule is imported
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/Logo.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = '';

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  onClick(event: Event): void {
    console.log("Save button is clicked", event);
    window.open(this.url, "_blank");
  }

  
  onInput(event: Event): void {
    this.userName = (event.target as HTMLInputElement).value; 

    console.log('Change Event Occurred!', this.userName);
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/; 
    if (nameRegex.test(this.userName)) {
      this.nameError = ''; 
    } else {
      this.nameError = 'Name is Incorrect!';
    }
  }
}
