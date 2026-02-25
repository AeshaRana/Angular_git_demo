import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CardsComponent } from '../cards.component/cards.component';
import { ChartModule } from 'primeng/chart';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ButtonComponent } from '../button.component/button.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../Service/product.service';
import { Product } from '../data/product.module.ts/product.module.ts-module';
import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [CardsComponent, ChartModule, Carousel, ButtonModule, TagModule],
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrl: './dashboard.component.css',
  providers: [ProductService],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit ,AfterViewInit{
  products!: Product [];

  responsiveOptions: any[] | undefined;

  constructor(private service: ProductService,private cd:ChangeDetectorRef) {

  }

  ngOnInit() {
       this.service.getAllProducts().subscribe((data) => {
      this.products = [...data];
      this.cd.detectChanges();
    });
     
  
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
        default:
          return 'info'
    }
   
  }
}
