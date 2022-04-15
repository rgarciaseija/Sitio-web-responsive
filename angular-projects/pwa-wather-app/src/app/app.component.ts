import { Component, OnInit } from '@angular/core';
import {filter, map, switchMap } from 'rxjs/operators'
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pwa-wather-app';

  constructor(private updates: SwUpdate,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    // TODO: Need more explanation here
    this.updates.available.pipe(
      switchMap(()=>this.snackBar.open('A new version is available.', 'Update Now').afterDismissed()),
      filter(result=>result.dismissedByAction),
      map(()=> this.updates.activateUpdate().then(()=>location.reload()))
    ).subscribe();
  }
}
