import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent} from './component/notfound/notfound.component';
import { ReactiveFormComponent } from './component/reactiveForm/reactiveForm.component';
import { CssExampleComponent } from './component/cssExample/cssExample.component';
import { ColorComponent } from './component/color/color.component';
import { FontComponent } from './component/font/font.component';
import { AuthGuard } from './service/guard/auth.guard';
import { TableComponent } from './component/table/table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'cssExample', component: CssExampleComponent },
  { path: 'color', component: ColorComponent },
  { path: 'font', component: FontComponent },
  { path: 'table', component: TableComponent },
  
  // { path: 'register',   component: RegisterComponent },
  // { path: 'employee/:id',canActivate: [AuthGuardGuard], component: EmployeeAccordionComponent },
  // { path: 'cascade',    canActivate: [AuthGuardGuard], component: CascadeDropDownComponent },
  // { path: 'collapse',   canActivate: [AuthGuardGuard], component: CollapseExampleComponent },
  // { path: 'product',    canActivate: [AuthGuardGuard], component: ProductInsertComponent },
  // { path: 'dashboard',  canActivate: [AuthGuardGuard], component: DashboardComponent },
  // { path: 'productList',canActivate: [AuthGuardGuard], component: ProductListComponent },
  // { path: 'upload',     canActivate: [AuthGuardGuard], component: UpLoadComponent },
  // { path: 'editorTemplate',canActivate: [AuthGuardGuard], component: EditorTemplateComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
