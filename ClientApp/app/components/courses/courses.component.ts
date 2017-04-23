import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../../course';
import { Router } from '@angular/router';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
    public courses: Course[];   
    selectedCourse: Course;
    detailsSelected: boolean = false;
    deleteSelected: boolean = false;

    constructor(private router: Router, private http: Http) {
        http.get('/api/courses').subscribe(result => {
            this.courses = result.json();
        });
    }

    delete(): void {
            this.http.delete('/api/courses/' + this.selectedCourse.id).subscribe(result => {
                this.courses = this.courses.filter(h => h !== this.selectedCourse);
                this.deleteSelected = false;
        })   
    }

    onSelect(course: Course): void {
        this.selectedCourse = course;
        this.detailsSelected = true;
        this.deleteSelected = false;
    }

    onDelete(course: Course): void {
        this.selectedCourse = course;
        this.detailsSelected = false;
        this.deleteSelected = true;
    }

    gotoAdd(): void {
        this.router.navigate(['/add']);
    }

    gotoEdit(course: Course): void {
        this.selectedCourse = course;
        this.router.navigate(['/edit', this.selectedCourse.id]);
    }

    gotoDetail(course: Course): void {
        this.router.navigate(['/detail', this.selectedCourse.id]);
    }

    gotoClose(): void {
        this.detailsSelected = false;
    }
}

