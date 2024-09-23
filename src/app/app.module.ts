import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityFormComponent } from './city-list/city-form/city-form.component';
import { OrganizationFormComponent } from './organization-list/organization-form/organization-form.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';

// Import PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MenuModule } from 'primeng/menu';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RankListComponent } from './rank-list/rank-list.component';
import { RankFormComponent } from './rank-list/rank-form/rank-form.component';
import { OrganizationInterceptor } from './Services/organization.interceptor';
import { LoginComponent } from './authentication/login/login.component';
import { NavComponent } from './landing-page/nav/nav.component';
import { PageNotFoundComponent } from './404-page/page-not-found/page-not-found.component';
import { TableComponent } from './dynamic-table/table/table.component';
import { FormComponent } from './shared/reusable-form/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityFormComponent,
    OrganizationFormComponent,
    OrganizationListComponent,
    RankListComponent,
    RankFormComponent,
    LoginComponent,
    NavComponent,
    PageNotFoundComponent,
    TableComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    ChipModule,
    TableModule,
    TagModule,
    MenuModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MessagesModule,
    InputTextModule,
    PasswordModule,
  ],
  providers: [
    DialogService,
    DynamicDialogRef,
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: OrganizationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
