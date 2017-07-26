import { Component,OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    moduleId : module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    
    pageTitle: string = 'Product List';
    imageWidth: number = 40;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string ;
    errorMessage: string;
    
    products: IProduct[];

//events
constructor(private _productService: ProductService){
    
}

togleImage(): void {
    this.showImage = !this.showImage;
}

ngOnInit(): void {
    this._productService.getProducts().subscribe(products => this.products = products,
                                                  error => this.errorMessage = <any> error ); 
    console.log('In OnInit');
        //throw new Error("Method not implemented.");
    }

onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: '+ message;
    }
}