import { issues } from './../../assets/_mock-data';
import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  // let's use mock data for now
  private issues : Issue[] = issues;
  constructor() { }

  getPendingIssues() : Issue[] {
    // return issues that are not yet completed
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }
}
