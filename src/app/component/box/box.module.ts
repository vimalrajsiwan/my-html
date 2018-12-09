import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BoxComponent } from "./box.component";
import { BoxRoutingModule } from "./box.routing";
@NgModule({
  declarations: [
   BoxComponent
  ],
  imports: [
    //RouterModule.forRoot(DataRoutingModule)
    CommonModule,
    BoxRoutingModule
  ],
  //providers: [CommonService,AuthGuard],
  //bootstrap: [AppComponent]
})
export class BoxModule { }
