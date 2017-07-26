import { Component } from '@angular/core';
import { ProductService } from './Products/product.service'

@Component ( {
    selector: 'pm-app',
    template: `<div>
        <h1>{{pageTitle}}</h1>     
            <pm-products></pm-products>
    </div>`,
    providers: [ProductService]
})

export class AppComponent {
    pageTitle: string = "Aarabhi's Product Management";
}