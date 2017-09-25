import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'employee-overview-component',
    template: `<h1>This is overview</h1>`
})

export class EmployeeOverViewComponent implements OnInit, OnDestroy {
    /* Get ID từ Parent*/
    public parentRouterId: number;
    public sub: Subscription;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        /* 
        Get router từ cái actived mới được
        Get router từ cái router không được
        */
        this.sub = this.activatedRoute.parent.params.subscribe(params => {
            this.parentRouterId = params['id'];
            alert(this.parentRouterId);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}