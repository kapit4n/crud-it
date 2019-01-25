import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OListComponent } from './ui/comp/o-list/o-list.component';
import { OCreateComponent } from './ui/comp/o-create/o-create.component';
import { OUpdateComponent } from './ui/comp/o-update/o-update.component';
import { OInfoComponent } from './ui/comp/o-info/o-info.component';
import { OService } from './svc/ui/o.service'

@NgModule({
  declarations: [
    AppComponent,
    OListComponent,
    OCreateComponent,
    OUpdateComponent,
    OInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OService],
  bootstrap: [AppComponent]
})
export class AppModule { }
