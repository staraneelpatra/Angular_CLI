import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { FlatcmpntComponent } from './flatcmpnt.component';
import { IncmpntComponent } from './incmpnt/incmpnt.component';
import { TestcmpntComponent } from './testcmpnt/testcmpnt.component';
import { EmpserviceService } from './empservice.service';


@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    FlatcmpntComponent,
    IncmpntComponent,
    TestcmpntComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
