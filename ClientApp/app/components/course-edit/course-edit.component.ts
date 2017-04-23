import 'rxjs/add/operator/switchMap';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../../course';

@Component({
    selector: 'course-edit',
    templateUrl: './course-edit.component.html'
})

export class CourseEditComponent implements OnInit {
    course: Course;

    constructor(private http: Http,
        private route: ActivatedRoute,
        private location: Location
    ) { }


    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.http.get('/api/courses/'+params['id']))
            .subscribe(result => {
                this.course = result.json();
            });
    }

    save(): void {
        if (!this.course.title) { return; } 
        this.http.put('/api/courses', this.course).subscribe(result => {
            this.goBack();
        })   
    }


    goBack(): void {
        this.location.back();
    }
}
