import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    HttpClientModule,
    RatingModule,
    ProgressSpinnerModule,
    CheckboxModule,
    InputNumberModule,
    ConfirmPopupModule,
    OverlayPanelModule,
    BrowserAnimationsModule   

    
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    HttpClientModule,
    RatingModule,
    ProgressSpinnerModule,
    CheckboxModule,
    InputNumberModule,
    ConfirmPopupModule,
    OverlayPanelModule,
    BrowserAnimationsModule
    

  ]
})
export class SharedModule { }
