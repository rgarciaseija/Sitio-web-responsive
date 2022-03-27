import { IssuesService } from './../../services/issues.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from 'src/app/services/issue';


@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  @Input() editIssue: Issue | null = null;
  @Output() formClose = new EventEmitter();

  issueForm: FormGroup | undefined;
  suggestions: Issue[] = [];

  constructor(private formBuilder: FormBuilder,
    private issueService: IssuesService) {
      console.log(this.editIssue);
    }

  ngOnInit(): void {
    // let's make all fields required for now
    this.issueForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.issueForm.controls.title.valueChanges.subscribe((title: string) => {
      this.suggestions = this.issueService.getSuggestions(title);
    })
  }

  addIssue() {
    if(this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    this.issueService.createIssue(this.issueForm?.value);
    // let's emit the value of our form
    this.formClose.emit(this.issueForm?.value);
  }

}
