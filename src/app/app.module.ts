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
import { HeaderComponent } from './components/header/header.component';
import { SortingModalComponent } from './components/sorting-modal/sorting-modal.component';
import { SortPipe } from './pipes/sort.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryPipePipe } from './pipes/category-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

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
    ModalDirective,
    HeaderComponent,
    SortingModalComponent,
    SortPipe,
    FooterComponent,
    CategoryPipePipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
