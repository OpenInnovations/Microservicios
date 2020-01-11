import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatFormComponent } from './cat-form/cat-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaSService } from './service/categoria-s.service';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoriaSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
