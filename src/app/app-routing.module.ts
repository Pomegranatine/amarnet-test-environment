import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WhyUsComponent } from "./why-us/why-us.component";
import { HelpComponent } from "./help/help.component";
import { PriceComponent } from "./price/price.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "why-us", component: WhyUsComponent },
  { path: "help", component: HelpComponent },
  { path: "price", component: PriceComponent },
  { path: "products", component: ProductsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
