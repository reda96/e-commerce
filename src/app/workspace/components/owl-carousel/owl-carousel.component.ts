import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss']
})
export class OwlCarouselComponent implements OnInit {
    products!: any[];

    responsiveOptions: any[] | undefined;

    constructor() {}

    ngOnInit() {
       this.products=[
        {
          name: 'female collections',
          description: 'female winter collection with offers',
          image: '/assets/images/female-model.png',
          category:'',
          height: '500'
    
        },
      {
        name: 'male winter collections',
        description: 'Buy 2 get 3rd free',
        image: '/assets/images/male-model.png',
        category:'',
        height: '470'
    
    },{
        name: 'kids winter collections',
        description: 'Buy 2 get 3rd free',
        image: '/assets/images/kid-model.png',
        height: '520',
        category:''
    }
       ]

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
      
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