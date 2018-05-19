import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapGridComponent } from './home/bootstrap-grid/bootstrap-grid.component';

const appRoutes: Routes = [
  {
    path: 'bootstrap-grid',
    component: BootstrapGridComponent,
    outlet: 'bootstrap-grid'
  },
  
  { path: '',   redirectTo: '/bootstrap-grid', pathMatch: 'full' },
  { path: '**', component: BootstrapGridComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})

export class AppRoutingModule { }


