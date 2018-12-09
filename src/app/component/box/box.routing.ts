import { Routes, RouterModule } from "@angular/router";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { AuthGuard } from "src/app/service/guard/auth.guard";
import { BoxComponent } from "./box.component";


const routes: Routes = [
//  { path: 'data', component: DataComponent,canActivate:[AuthGuard] },
{ path: 'box', component: BoxComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
//export class DataRoutingModule { }
export const BoxRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
// @NgModule({
//   imports: [
//     RouterModule.forChild(routes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class DataRoutingModule { }
