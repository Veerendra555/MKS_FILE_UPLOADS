import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidemenuComponent } from './shared/components/sidemenu/sidemenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedServiceService} from './shared/service/shared-service.service';
import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import {CKEditorModule} from 'ngx-ckeditor';
import { AppMaterialModule } from './app-material/app-material.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AddAdminComponent } from './components/master/admin/add-admin/add-admin.component';
import { ViewAdminComponent } from './components/master/admin/view-admin/view-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    SidemenuComponent,
    AddAdminComponent,
    ViewAdminComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgImageFullscreenViewModule,
    BrowserAnimationsModule,
    CKEditorModule,
    AppMaterialModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    Ng2SmartTableModule,
    ChartsModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    NgxMaskModule.forRoot({
      showMaskTyped : true,
    })
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
