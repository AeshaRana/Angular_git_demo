import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonComponent } from "../button.component/button.component";
import { RadioButtonModule } from 'primeng/radiobutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { Button } from "primeng/button";
import { Router } from '@angular/router';
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-registration',
  imports: [AutoCompleteModule, FormsModule, RadioButtonModule, FloatLabelModule, DatePickerModule, InputMaskModule, Button, DividerModule],
  templateUrl: './registration.component.html',
  standalone: true,
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  selectedCountryAdvanced: any;
  filteredCountries: any[] = [];

  value: any;
  value1: any;
  items: any[] = []
  countries: any[] = ['India', 'USA', 'China', 'Canada', 'Germany'];
  gender: any;
  address: any;
  date2: any;
  password: any;
  phoneNumber!:number;

  constructor(private route:Router)
  {

  }

  search(event: AutoCompleteCompleteEvent) {
    this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
  }

  filterCountry(event: any) {
    const query = event.query.toLowerCase();

    this.filteredCountries = this.countries.filter(country =>
      country.toLowerCase().includes(query)
    );
  }

  redirectToLogin()
  {
    this.route.navigateByUrl('/login')
  }
}
