import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { WhyUsComponent } from "./why-us/why-us.component";
import { HelpComponent } from "./help/help.component";
import { PriceComponent } from "./price/price.component";
import { ProductsComponent } from "./products/products.component";

import { AngularFireModule } from "@angular/fire";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, AngularFireModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    WhyUsComponent,
    HelpComponent,
    PriceComponent,
    ProductsComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
