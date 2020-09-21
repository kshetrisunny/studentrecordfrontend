import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserrecordService } from 'src/app/services/userrecord.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  serverErrorMessages: string;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private route: Router,public userRecord: UserrecordService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.userRecord.login(form.value).subscribe(res => {
      this.route.navigateByUrl('/dash/dash');
    },
      err => {
        this.serverErrorMessages = err.error.serverErrorMessages;
      }
    );
  }

  register() {
    this.route.navigateByUrl('/');
  }

}
