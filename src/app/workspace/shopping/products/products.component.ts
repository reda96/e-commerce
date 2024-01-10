import { LocationStrategy } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Observable, Subscription, tap } from 'rxjs';
import { Product } from 'src/app/core/models/Product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productsObs: Observable<Product[]> = this.productsService.listProducts$;
  listCategories: Observable<any[]> = this.productsService.listCategories$;
  products!: Product[];
  filter!: any;
  sortBy!: any;
  showFilters = true;
  sortByOptions = [
    { name: 'Top Rated', sortBy: 'ratingsAverage', sortType: -1 },
    { name: 'Best Seller', sortBy: 'sold', sortType: -1 },
    { name: 'Price Descending', sortBy: 'price', sortType: -1 },
    { name: 'Price Ascending', sortBy: 'price', sortType: 1 },
  ];

  subscription!: Subscription;
  // sortType = -1;
  categories!: any[];
  items!: MenuItem[];

  currentCategory: any = 'all';
  constructor(
    private productsService: ProductsService,
    private _location: LocationStrategy
  ) {
    this.listCategories?.subscribe((res) => {
      this.categories = res;

      this.items = [
        {
          expanded: true,
          label: 'Category',
          // icon: 'pi pi-fw pi-file',
          items: this.categories?.map((c) => {
            return {
              label: c.name,
              command: () => this.listbyCategory(c),
            } as MenuItem;
          }),
        },
        {
          expanded: true,
          label: 'other filters',
          items: [
            {
              label: 'discount',
              command: () => {
                this.filter = { priceAfterDiscount: { $exists: true } };
                this.listAllProducts();
              },
            },
          ],
        },

        // {
        //     label: 'Users',
        //     icon: 'pi pi-fw pi-user',
        //     items: [
        //         {
        //             label: 'New',
        //             icon: 'pi pi-fw pi-user-plus'
        //         },
        //         {
        //             label: 'Delete',
        //             icon: 'pi pi-fw pi-user-minus'
        //         },
        //         {
        //             label: 'Search',
        //             icon: 'pi pi-fw pi-users',
        //             items: [
        //                 {
        //                     label: 'Filter',
        //                     icon: 'pi pi-fw pi-filter',
        //                     items: [
        //                         {
        //                             label: 'Print',
        //                             icon: 'pi pi-fw pi-print'
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     icon: 'pi pi-fw pi-bars',
        //                     label: 'List'
        //                 }
        //             ]
        //         }
        //     ]
        // },
      ];
    });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    // this.productsService.listAllCategories();
    let state: any = this._location.getState();
    
    this.sortBy = state?.sortBy
      ? this.sortByOptions.find((s) => s.sortBy == state.sortBy&&s.sortType == state.sortType)
      : undefined;

      // this.listAllProducts();
    if (state.filter) {
      this.filter = state.filter;

      // this.subscription = this.productsService
      //   .listProducts(`/products`, undefined, state.filter)
      //   .pipe(
      //     tap((res) => {
      //       console.log(res);

      //       this.products=res;
      //       // this.productsSubject.next(res);
      //     })
      //   )
      //   .subscribe();
    }
    if (state?.category) {
      // this.productsService.listByCategory(state.category);
      this.currentCategory = state.category;
    }
    setTimeout(() => {
      this.listAllProducts();
    });
    // this.productsService.listAllProducts(this.sortBy?.sortBy, 50,this.sortBy?.sortType,undefined,this.currentCategory,this.filter);
  }

  listAllProducts() {
    let category =
      this.currentCategory == 'all' ? undefined : this.currentCategory;
    this.productsService.listAllProducts(
      this.sortBy?.sortBy,
      50,
      this.sortBy?.sortType,
      undefined,
      category?._id,
      this.filter
    );
    // this.currentCategory = 'all';
  }
  listbyCategory(category: any) {
    this.currentCategory = category;

    // this.productsService.listByCategory(categoryId);
    this.listAllProducts();
  }
  changeSortBy(event: DropdownChangeEvent) {
    // console.log(event.value);
    this.sortBy = event.value;

    this.listAllProducts();
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
