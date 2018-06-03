//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { BootstrapGridComponent } from './home/bootstrap-grid/bootstrap-grid.component';
import { TablesComponent } from './home/tables/tables.component';
import { BookCreateComponent } from './home/book/book-create/book-create.component';
import { BookListComponent } from './home/book/book-list/book-list.component';
import { BookResolver } from './home/book/book.resolver';

const appRoutes: Routes = [
    {
        path: 'home',
        children: [
            {
                path: 'book',
                children: [
                    { path: 'create', component: BookCreateComponent },
                    { 
                        path: 'list', 
                        component: BookListComponent,
                        resolve: { books: BookResolver }
                    }
                ]
            },

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


