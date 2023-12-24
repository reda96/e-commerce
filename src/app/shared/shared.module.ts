import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    HttpClientModule,
    RatingModule,
    ProgressSpinnerModule,
    CheckboxModule,
    InputNumberModule

    
  ],
  exports:[
    CommonModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    HttpClientModule,
    RatingModule,
    ProgressSpinnerModule,
    CheckboxModule,
    InputNumberModule

  ]
})
export class SharedModule { }
