import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class Constants {

    // public serverUrl = 'http://localhost:3000/api/';

    
    public userRecordUrl = environment.apiBaseUrl + 'userrecords';
    public userRecordUrl1 = environment.apiBaseUrl + 'auth';
    public addMarksUrl = environment.apiBaseUrl + 'addmarks';
}