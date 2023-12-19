import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    HttpClientModule,
    
  ],
  exports:[
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    HttpClientModule
  ]
})
export class SharedModule { }
