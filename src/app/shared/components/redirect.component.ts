import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-redirect',
  template: 'redirecting...'
})
export class RedirectComponent implements OnInit {
  redirectUrl;
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    window.location.href = data.url;
    }
}
