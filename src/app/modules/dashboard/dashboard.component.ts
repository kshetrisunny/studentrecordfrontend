import { Component, OnInit } from '@angular/core';
import { UserrecordService } from 'src/app/services/userrecord.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userData: any[] = [];
  subData: object [];
 
  displayedColumns: string[] = ['name', 'email', 'mobile', 'favsub', 'subject', 'marks'];
  dataSource = this.userData;
  constructor(public userRecord: UserrecordService) { }

 
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userRecord.getSubjectMarks().subscribe(res => {
      this.userData = res['data'];
      this.dataSource = this.userData;
    })
  }

}
