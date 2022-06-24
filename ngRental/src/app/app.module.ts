import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PropertiesService } from './services/properties.service';
import { PropertyAveragePipe } from './pipes/property-average.pipe';
import { PropertysumPipe } from './pipes/propertysum.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PropertyAveragePipe,
    PropertysumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    PropertiesService,
    PropertyAveragePipe,
    PropertysumPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
