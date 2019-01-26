import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OListComponent } from './ui/comp/o-list/o-list.component';
import { OCreateComponent } from './ui/comp/o-create/o-create.component';
import { OUpdateComponent } from './ui/comp/o-update/o-update.component';
import { OInfoComponent } from './ui/comp/o-info/o-info.component';


const routes: Routes = [
  { path: 'products', component: OListComponent },
  { path: 'product-add', component: OCreateComponent },
  { path: 'product-info/:id', component: OInfoComponent },
  { path: 'product-update/:id', component: OUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
