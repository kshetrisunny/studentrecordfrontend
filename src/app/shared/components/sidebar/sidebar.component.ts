import { Component, OnInit } from '@angular/core';
import { UserrecordService } from 'src/app/services/userrecord.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  data: [];
  constructor(public userRecord: UserrecordService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userRecord.get().subscribe(res => {
      this.data = res['data'];
      // console.log(this.data);
    })
  }

}
