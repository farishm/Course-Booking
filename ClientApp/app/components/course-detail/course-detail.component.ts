import 'rxjs/add/operator/switchMap';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../../course';

@Component({
    selector: 'course-detail',
    templateUrl: './course-detail.component.html'
})
export class CourseDetailComponent {
    course: Course;

    constructor(private http: Http,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) { }


    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.http.get('/api/courses/' + params['id']))
            .subscribe(result => {
                this.course = result.json();
            });
    }

    edit(): void {
        this.router.navigate(['/edit', this.course.id]);
    }

    goBack(): void {
        this.location.back();
    }
}


