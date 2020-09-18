import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddMarks } from '../models/addmarks.model';
import { Constants } from '../utility/constants';


@Injectable({
  providedIn: 'root'
})
export class AddmarksService {

  marksData: AddMarks = {
    userId: '',
    subject: '',
    marks: ''
  };
  constructor(private http: HttpClient, private constanturl: Constants) { }

  post(marks: AddMarks) {
    return this.http.post(this.constanturl.addMarksUrl, marks);
  }

  get() {
    return this.http.get(this.constanturl.addMarksUrl);
  }


}
