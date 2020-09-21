import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserrecordService } from 'src/app/services/userrecord.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private route: Router,public userRecord: UserrecordService) { }

  favsub: any[] = [
    { subject: 'English' },
    { subject: 'Maths' },
    { subject: 'Science' }
  ];

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.userRecord.postUserData(form.value).subscribe(res => {
      this.showSucessMessage = true;
      this.route.navigateByUrl('/login');
      setTimeout(() => {
        this.showSucessMessage = false
      }, 2000);
      this.resetForm(form);
    },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin'
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.userRecord.selectedUser = {
      name: '',
      email: '',
      mobile: '',
      favsub: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
