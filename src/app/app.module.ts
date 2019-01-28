import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OListComponent } from './ui/comp/o-list/o-list.component';
import { OCreateComponent } from './ui/comp/o-create/o-create.component';
import { OUpdateComponent } from './ui/comp/o-update/o-update.component';
import { OInfoComponent } from './ui/comp/o-info/o-info.component';
import { ConfigService } from './svc/ui/config.service';
import { OService } from './svc/ui/o.service';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConfigService, OService],
  bootstrap: [AppComponent]
})
export class AppModule { }
