
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseSearchComponent } from './components/course-search/course-search.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        CoursesComponent,
        CourseDetailComponent,
        CourseEditComponent,
        CourseAddComponent,
        CourseSearchComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },           
            { path: 'courses', component: CoursesComponent },
            { path: 'add', component: CourseAddComponent },
            { path: 'edit/:id', component: CourseEditComponent },
            { path: 'detail/:id', component: CourseDetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}


