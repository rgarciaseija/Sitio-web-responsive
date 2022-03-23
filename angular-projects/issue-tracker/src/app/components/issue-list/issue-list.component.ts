import { IssuesService } from './../../services/issues.service';
import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/services/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {


  issues : Issue[] = [];
  constructor(private issueService: IssuesService) { }

  ngOnInit(): void {
    this.getPendingIssues();
  }

  getPendingIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

}
