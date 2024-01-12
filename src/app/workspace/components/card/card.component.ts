import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() label!:string;
  @Input() filter!:object;
  // subscription!:Subscription;

  constructor(){}

  ngOnInit(): void {
  
    // this.subscription= this.productsService.listProducts(`/products`,undefined, this.filter).pipe(
    //   tap(res=> {
    //     console.log(res);
        
    //     // this.products=res;
    //     // this.productsSubject.next(res);
    //   })
    // ).subscribe()
  }
}
