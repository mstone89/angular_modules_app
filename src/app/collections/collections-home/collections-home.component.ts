import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
    paths = [ 'biography', 'companies', 'partners' ];

    data = [
        { name: 'Molly', age: 31, job: 'developer', employed: true },
        { name: 'Billy', age: 42, job: 'podmate', employed: false },
        { name: 'Amanda', age: 36, job: 'jerkwad', employed: true }
    ];

    headers = [
        { key: 'employed', label: 'Employed?' },
        { key: 'name', label: 'Name'},
        { key: 'age', label: 'Age'},
        { key: 'job', label: 'Job'}
    ];

    constructor() { }

    ngOnInit() {
    }

}
