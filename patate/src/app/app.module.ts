import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TopmenuComponent } from './topmenu/topmenu.component';
// import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MainComponent } from './main/main.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { FooterComponent } from './footer/footer.component';
// import { Maintab1Component } from './main/maintab1/maintab1.component';
// import { ProgressBarComponent } from './progress-bar/progress-bar.component';
// import { UserItemComponent } from './user-item/user-item.component';
// import { NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule } from '@nebular/theme';
// import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    AppComponent,
    // TopmenuComponent,
    // BreadcrumbComponent,
    MainComponent,
    // SidebarComponent,
    // FooterComponent,
    // Maintab1Component,
    // ProgressBarComponent,
    // UserItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    // NbThemeModule.forRoot({ name: 'corporate' }),
    // NbLayoutModule,
    // NbButtonModule,
    // NbSidebarModule,
    // NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
