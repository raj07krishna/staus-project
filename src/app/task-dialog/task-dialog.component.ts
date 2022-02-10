import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';

export interface IPerson {
  "id": number, "firstName": string, "lastName": string
}

export interface IStatus {
  "id": number, "name": string
}
@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  assignedPerson:number
  assigneeList: IPerson[] = []
  statusList: IStatus[] = []
  selectedStatus = ''
  taskList: any = [];
  taskName = '';
  dateValue = new Date();
  constructor(private dataFetch: DataFetchService) { }

  ngOnInit(): void {
    this.dataFetch.getPeopleData().subscribe(
      (data) => {
        console.log(data)
        this.assigneeList = data;
      }
    )
    this.dataFetch.getStatusData().subscribe(
      (data) => {
        console.log(data)
        this.statusList = data;
      }
    )
    this.dataFetch.getTaskData().subscribe(
      (data) => {
        console.log(data)
        this.taskList = data;
      }
    )
  }

  sendData(){
    this.dataFetch.subjectDialog.next({
      person: this.assigneeList.filter(data => data.id === this.assignedPerson) ,
      status: this.selectedStatus,
      task: this.taskName,
      date: this.dateValue
    })
  }

}
