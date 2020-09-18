import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRecord } from '../models/userRecord.model';
import { Constants } from '../utility/constants';

@Injectable({
  providedIn: 'root'
})
export class UserrecordService {

  selectedUser: UserRecord = {
    name: '',
    email: '',
    mobile: '',
    favsub: '',
    password: ''
  }

  constructor(private http: HttpClient,private constanturl: Constants) { }

  post(user: UserRecord) {
    return this.http.post(this.constanturl.userRecordUrl, user);
  }

  get() {
    return this.http.get(this.constanturl.userRecordUrl);
  }

  login(authCredentials) {
    return this.http.post(this.constanturl.userRecordUrl1, authCredentials);
  }
}
