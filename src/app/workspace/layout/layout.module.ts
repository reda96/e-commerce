import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { SearchComponent } from '../components/search/search.component';

@NgModule({
  declarations: [HeaderComponent,SearchComponent, FooterComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    OverlayPanelModule,
    // BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MenuModule,
  ],
  exports: [MainLayoutComponent],
})
export class LayoutModule {}
