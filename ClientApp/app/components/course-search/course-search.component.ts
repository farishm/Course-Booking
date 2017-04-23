import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Course } from '../../course';
import { CourseSearchService } from '../../course-search.service';

@Component({
    selector: 'course-search',
    templateUrl: './course-search.component.html',
    styleUrls: ['./course-search.component.css'],
    providers: [CourseSearchService]
})
export class CourseSearchComponent implements OnInit {
    courses: Observable<Course[]>;
    private searchTerms = new Subject<string>();
    constructor(
        private courseSearchService: CourseSearchService,
        private router: Router) { }
    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.courses = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.courseSearchService.search(term)
                // or the observable of empty courses if there was no search term
                : Observable.of<Course[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Course[]>([]);
            });
    }
    gotoDetail(course: Course): void {
        let link = ['/detail', course.id];
        this.router.navigate(link);
    }
}