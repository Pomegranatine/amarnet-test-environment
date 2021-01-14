import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [{path:'home', component: HomeComponent},
{path: 'server', component: ServersComponent, children: [
{path: ':id', component: ServerComponent},
{path: ':id/edit', component: EditServerComponent}
]},
{path: 'user', component: UserComponent},
{path: '' , redirectTo: '/home' ,pathMatch: 'full'},
{path: '**', component: NoPageComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
