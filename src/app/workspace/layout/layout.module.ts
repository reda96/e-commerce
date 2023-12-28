import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  HeaderComponent,
  FooterComponent,
  MainLayoutComponent
  ],
  imports: [
    CommonModule,
    OverlayPanelModule,
    // BrowserModule,
    HttpClientModule
    
  ],
  exports:[MainLayoutComponent]
})
export class LayoutModule { }
