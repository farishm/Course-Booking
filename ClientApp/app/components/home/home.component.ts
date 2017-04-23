import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../../course';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    
    public courses: Course[];

    constructor(http: Http) {
        http.get('/api/courses/main').subscribe(result => {
            this.courses = result.json();
        });
    }
}
