import { Routes, RouterModule } from "@angular/router";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { DataComponent } from "./data.component";
import { AuthGuard } from "src/app/service/guard/auth.guard";


const routes: Routes = [
//  { path: 'data', component: DataComponent,canActivate:[AuthGuard] },
{ path: 'data', component: DataComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
//export class DataRoutingModule { }
export const DataRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
// @NgModule({
//   imports: [
//     RouterModule.forChild(routes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class DataRoutingModule { }
