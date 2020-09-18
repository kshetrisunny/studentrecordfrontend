import { Component, OnInit } from '@angular/core';
import { AddMarks } from 'src/app/models/addmarks.model';
import { UserRecord } from 'src/app/models/userRecord.model';
import { AddmarksService } from 'src/app/services/addmarks.service';
import { UserrecordService } from 'src/app/services/userrecord.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allData: any[];
  userData: UserRecord[] = [];
  marksData: AddMarks[] = [];
  displayedColumns: string[] = ['name', 'email', 'mobile', 'favsub'];
  dataSource = this.userData;
  constructor(public userRecord: UserrecordService, public addMarksService: AddmarksService) { }

 
  ngOnInit(): void {
    this.getData();
    this.getMarks();
  }

  getData() {
    this.userRecord.get().subscribe(res => {
      this.userData = res['data'];
      this.dataSource = this.userData;
      console.log(this.dataSource);
    })
  }

  getMarks() {
    this.addMarksService.get().subscribe(res => {
      this.marksData = res['data'];
      console.log(this.marksData);
    })
  }

}
