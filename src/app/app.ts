import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./button.component/button.component";
import { NavbarComponent } from "./navbar.component/navbar.component";
import { RegistrationComponent } from "./registration.component/registration.component";
import { LoginComponent } from "./login.component/login.component";
import { SidebarComponent } from "./sidebar.component/sidebar.component";
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, DividerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prime-ng-demo');
}
