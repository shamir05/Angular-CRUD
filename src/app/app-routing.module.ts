import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { RankListComponent } from './rank-list/rank-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { LoginComponent } from './authentication/login/login.component';
import { NavComponent } from './landing-page/nav/nav.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './404-page/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: NavComponent, canActivate: [AuthGuard], children: [
    {path: '', component: CityListComponent},
    {path: 'rank-list', component: RankListComponent},
    {path: 'organization-list', component: OrganizationListComponent},
  ]},
  {path: '**', component: PageNotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
