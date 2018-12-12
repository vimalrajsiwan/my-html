import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent} from './component/notfound/notfound.component';
import { ReactiveFormComponent } from './component/reactiveForm/reactiveForm.component';
import { CssExampleComponent } from './component/cssExample/cssExample.component';
import { ColorComponent } from './component/color/color.component';
import { FontComponent } from './component/font/font.component';
import { CommonService } from './service/common/common.service';
import { AuthGuard } from './service/guard/auth.guard';
import { DataModule } from './component/data/data.module';
import { DataRoutingModule } from './component/data/data.routing';
import { BoxModule } from './component/box/box.module';
import { TableComponent } from './component/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ReactiveFormComponent,
    CssExampleComponent,
    ColorComponent,
    FontComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    BoxModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    //DataRoutingModule
  ],
  providers: [CommonService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
