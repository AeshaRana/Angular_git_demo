import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ButtonComponent } from '../button.component/button.component';
import { InputIcon, InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PasswordModule } from 'primeng/password';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from "primeng/button";
import { Router } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  imports: [
   
    FormsModule,
   
    InputIcon,
    IconFieldModule,
    IftaLabelModule,
    PasswordModule,
    FloatLabelModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    IftaLabelModule,
    FormsModule,
    ButtonModule,DividerModule,MessageModule,ToastModule
  ],
  providers:[MessageService],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: any;
  password: any;
  items: any[] = [];
  messageService=inject(MessageService)
  // loginForm!:FormGroup;


  constructor(private route:Router)
  {

  }


  onLogin() {
    if (this.username === "admin" && this.password === "admin@123") {
      this.route.navigateByUrl('/dashboard')
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged in sucessfully', life: 3000 })
      
    }
    else
    {
      console.log("Incorrect cridentials")
    }
  }

  redirectRegister()
  {
    this.route.navigateByUrl('register')
  }

 
}
