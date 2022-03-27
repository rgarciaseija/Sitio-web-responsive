import { IssuesService } from './../../services/issues.service';
import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/services/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  showReportIssue: boolean = false;
  issues : Issue[] = [];
  selectedIssue : Issue | null = null;

  constructor(private issueService: IssuesService) { }

  ngOnInit(): void {
    this.getPendingIssues();
  }

  getPendingIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getPendingIssues();
  }

  onConfirm(confirmed : boolean) {
    if(confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getPendingIssues();
    }
    this.selectedIssue = null;
  }

  editIssue(issue: Issue) {
    this.selectedIssue = issue;
    console.log(this.selectedIssue);

    this.showReportIssue = true;
    // console.log(issue);
  }

  showIssueForm() {
    this.showReportIssue = true;
  }
}
