//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { BootstrapGridComponent } from './home/bootstrap-grid/bootstrap-grid.component';
import { TablesComponent } from './home/tables/tables.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'bootstrap-grid', component: BootstrapGridComponent },
            { path: 'tables', component: TablesComponent }
        ]
    },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
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


