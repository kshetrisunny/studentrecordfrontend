import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddMarks } from 'src/app/models/addmarks.model';
import { UserRecord } from 'src/app/models/userRecord.model';
import { AddmarksService } from 'src/app/services/addmarks.service';
import { UserrecordService } from 'src/app/services/userrecord.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  localUser: any;
  serverErrorMessages: string;
  userData: UserRecord[] = [];
  addMarks: AddMarks[] = [];

  constructor(public userRecord: UserrecordService, public addMarksService: AddmarksService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userRecord.getSubjectMarks().subscribe(res => {
      this.localUser = res;
      console.log(this.localUser);
    })
  }

  onSubmit(form: NgForm) {
    this.userRecord.postSubjectMarks(form.value).subscribe(res => {
      console.log(res);
      this.resetForm(form);
    },
      err => {
        this.serverErrorMessages = err.error.serverErrorMessages;
      }
    );
  }

  resetForm(form: NgForm) {
    this.userRecord.marksData = {
      subject: '',
      marks: '',
      userId: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
