import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRecord } from '../models/userRecord.model';
import { Constants } from '../utility/constants';
import { AddMarks } from '../models/addmarks.model';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserrecordService {

  user: any;
  marksId: any;
  selectedUser: UserRecord = {
    name: '',
    email: '',
    mobile: '',
    favsub: '',
    password: ''
  }
  marksData: AddMarks = {
    userId : '',
    subject: '',
    marks: ''
  };

  constructor(private http: HttpClient,private constanturl: Constants) { }

   /**
     * @package Services
     * @method extractData
     * @description A method to return data from the response received
     * @param res JSON/ String response received from the requesting service
     * @returns A JSON array with requested data
     */
    public extractData(res: Response): any {
      const body = res;
      return body || {};
  }

  /**
   * @package Services
   * @method handleError
   * @description A method to return human readable errors
   * @param operation service method that requested a resource
   * @param result usually an error response from a server
   * @returns An observable of error response
   */
  public handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);

          // Let the app keep running by returning an empty result.
          return of(result as T);
      };
  }


  postUserData(user: UserRecord) {
    return this.http.post(this.constanturl.userRecordUrl, user).pipe(map(this.extractData), tap((response) => console.log(`add userdata response: ${response.status}`)), catchError(this.handleError('post userdata')));
  }

  getUserData() {
    return this.http.get(this.constanturl.userRecordUrl).pipe(map(this.extractData),
    catchError(this.handleError<any>('getUserData')),
    );
  }

  login(authCredentials) {
    console.log(this.marksData.userId);
    return this.http.post(this.constanturl.userRecordUrl1, authCredentials).pipe(map(this.extractData), tap((response) => this.marksData.userId = response.data), catchError(this.handleError('login Data')));
  }

  postSubjectMarks(marks: AddMarks) {
    marks.userId = this.marksData.userId;
    return this.http.post(this.constanturl.addMarksUrl, marks).pipe(map(this.extractData), tap((response) => console.log(`add subject marks response: ${response.status}`)), catchError(this.handleError('post subject marks')));
  }

  getSubjectMarks() {
    return this.http.get(this.constanturl.addMarksUrl).pipe(map(this.extractData),
    catchError(this.handleError<any>('getSubjectMarksData')),
    );
  }

}
