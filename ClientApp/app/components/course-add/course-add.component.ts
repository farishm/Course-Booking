import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../../course';


@Component({
    selector: 'course-add',
    templateUrl: './course-add.component.html'
})
export class CourseAddComponent implements OnInit {
    course: Course;

    constructor(private http: Http,      
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.course = new Course();
    }

    save(): void {
        this.course.title = this.course.title.trim();
        if (!this.course.title) { return; } 

        this.http.post('/api/courses', this.course).subscribe(result => {
            this.goBack();
        })       
    }
    
    goBack(): void {
        this.location.back();
    }
}