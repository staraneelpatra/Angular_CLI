import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { FlatcmpntComponent } from './flatcmpnt.component';
import { IncmpntComponent } from './incmpnt/incmpnt.component';
import { TestcmpntComponent } from './testcmpnt/testcmpnt.component';
import { EmpserviceService } from './empservice.service';
import { AppleserviceService } from './appleservice.service';
import { OrnageModule } from './/ornage.module';
import { PineModule } from './/pine.module';
import { YourdirectiveDirective } from './yourdirective.directive';
import { MypipePipe } from './mypipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    FlatcmpntComponent,
    IncmpntComponent,
    TestcmpntComponent,
    YourdirectiveDirective,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    OrnageModule,
    PineModule
  ],
  providers: [EmpserviceService, AppleserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
