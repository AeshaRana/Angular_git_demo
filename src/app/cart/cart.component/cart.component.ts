import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../data/product.module.ts/product.module.ts-module';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';


@Component({
  selector: 'app-cart',
  imports: [CommonModule, ButtonModule, RatingModule, TableModule, TagModule, FormsModule,PaginatorModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers:[ProductService]
})
export class CartComponent {
 first1: number = 0;
    rows1: number = 10;

private productService = inject(ProductService);
    products!: Product[];
    cols!: any[];

    constructor(private cd:ChangeDetectorRef)
    {

    }

    ngOnInit() {
        this.productService.getAllProducts().subscribe((data) => {
            this.products = data;
            this.cd.detectChanges();
        });
        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
                default :
                return 'info'
        }
    }

      onPageChange1(event: PaginatorState) {
        this.first1 = event.first ?? 0;
        this.rows1 = event.rows ?? 10;
    }
}
