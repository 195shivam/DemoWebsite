import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermOfUseComponent } from './components/term-of-use/term-of-use.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';
import { ItemsComponent } from './components/items/items.component';
import { ModalDirective } from './directives/modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    TermOfUseComponent,
    SearchComponent,
    CategoryComponent,
    ItemsComponent,
    ModalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
