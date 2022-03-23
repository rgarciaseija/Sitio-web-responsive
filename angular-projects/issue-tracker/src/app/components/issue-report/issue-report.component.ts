import { IssuesService } from './../../services/issues.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  @Output() formClose = new EventEmitter();

  issueForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder,
    private issueService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      title: [''],
      description: [''],
      priority: [''],
      type: ['']
    });
  }

  addIssue() {
    this.issueService.createIssue(this.issueForm?.value);
    // let's emit the value of our form
    this.formClose.emit(this.issueForm?.value);
  }

}
