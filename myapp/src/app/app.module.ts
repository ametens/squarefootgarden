import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { YangComponent } from './yang.component';
import { UnlessDirective }    from './unless.directive';
import { TriggerSortComponent } from './trigger-sort/trigger-sort.component';
import { AromaticsComponent } from './aromatics/aromatics.component';
import { ModalComponent } from './modal/modal.component';

const routes: Route[] = [
  // { path: 'recipes', component: RecipesComponent },
  // { path: 'sqfg', component: SqfgComponent, children: [
  //   { path: 'spring', component: SpringComponent },
  //   { path: 'summer', component: SummerComponent },
  //   { path: 'autumn', component: AutumnComponent },
  //   { path: 'winter', component: WinterComponent },
  // ] },
  // { path: 'search', component: SearchComponent },
  // { path: 'help', component: HelpComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    YangComponent,
    TriggerSortComponent,
    AromaticsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
