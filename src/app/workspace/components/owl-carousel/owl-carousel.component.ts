import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss']
})
export class OwlCarouselComponent implements OnInit {
    products!: any[];
    categories!:any[];
    responsiveOptions: any[] | undefined;
    categoriesObs = this.productsService.listCategories$;
    constructor(private productsService:ProductsService) {}

    ngOnInit() {
        this.productsService.listAllCategories();
        this.categoriesObs?.subscribe(res=>{
            
            this.categories=res;
            this.products=[
                {
                  name: 'female collections',
                  description: 'female winter collection with offers',
                  image: '/assets/images/female-model.png',
                  category:this.categories?.find((x:any)=> x.name=="women's collection"),
                  height: '500',
                  
            
                },
              {
                name: 'male winter collections',
                description: 'Buy 2 get 3rd free',
                image: '/assets/images/male-model.png',
                category:this.categories?.find((x:any)=> x.name=="men's collection"),
                height: '470'
            
            },{
                name: 'kids winter collections',
                description: 'Buy 2 get 3rd free',
                image: '/assets/images/kid-model.png',
                height: '550',
                category:this.categories?.find((x:any)=> x.name=="kid's collection"),
        
               
            }
               ]
        
        });
            // console.log(this.categories?.find((x:any)=> x.name=="women's collection"));

  

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
      
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default: return 'success'
        }
    }
}