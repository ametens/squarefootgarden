import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { MainComponent } from './main/main.component';


const appRoutes: Routes = [

   {path:'about', component: MainComponent, data: {title: 'About Veggie World'}}
  //  {path:'sqfg', component: MainComponent, data: {title: 'Render a Square foot garden'}},
  //  {path:'recipes', component: MainComponent, data: {title: 'Recipes'}},
  //  {path:'help', component: MainComponent, data: {title: 'Help'}},
  //  {path:'user', component: MainComponent, data: {title: 'Login'}},
];

//Routes definition
// const appRoutes: Routes = [



//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];


/**
 *                     <ul class="nav nav-pils justify-content-center" id="tabtopmenu" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active show" data-toggle="tab" href="#tab1" aria-controls="tab1" aria-selected="true">About</a>
                        </li><li class="nav-item">
                            <a class="nav-link" href="#tab2" aria-controls="tab2" aria-selected="false" data-toggle="tab">Squarefoot gardens</a>
                        </li><li class="nav-item">
                            <a class="nav-link" href="#tab3"  aria-controls="tab3" aria-selected="false" data-toggle="tab">Recipes</a>
                        </li><li class="nav-item">
                            <a class="nav-link" href="#tab4"  aria-controls="tab4" aria-selected="false" data-toggle="tab">Seek vegs</a>    
                        </li><li class="nav-item">
                            <a class="nav-link" href="#tab5"  aria-controls="tab5" aria-selected="false" data-toggle="tab">Help</a>
                        </li>
                    </ul>

 * 
*/

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: true }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
