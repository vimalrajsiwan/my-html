import { NgModule } from "@angular/core";
import { DataComponent } from "./data.component";
import { RouterModule } from "@angular/router";
import {DataRoutingModule} from './data.routing';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
   DataComponent
  ],
  imports: [
    //RouterModule.forRoot(DataRoutingModule)
    CommonModule,
    DataRoutingModule
  ],
  //providers: [CommonService,AuthGuard],
  //bootstrap: [AppComponent]
})
export class DataModule { }
