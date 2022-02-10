import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICard } from '../card-design/card-design.model';
import { DataFetchService } from '../data-fetch.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notStartedCount = 0
  inProgressCount = 0
  completedCount = 0
  notStartedCards: ICard[] = [];
  inProgressCards : ICard[] = [];
  completedCards: ICard[] = [];
  count = 0
  constructor(public dialog: MatDialog, private dataService: DataFetchService) { }

  ngOnInit(): void {
    this.dataService.subjectDialog.subscribe(
      (data) => {
        console.log()
        switch (data.status) {
          case 1:
            this.notStartedCards.push({
              id: this.count++,
              name: data.task ,
              statusId: data.status,
              assignedTo: `${data.person[0].firstName} ${data.person[0].lastName}`,
              dueDate: data.date
            })
            break;
            case 2:
              this.inProgressCards.push({
                id: this.count++,
                name: data.task ,
                statusId: data.status,
                assignedTo: `${data.person[0].firstName} ${data.person[0].lastName}`,
                dueDate: data.date
              })
            break;
            case 3:
              this.completedCards.push({
                id: this.count++,
                name: data.task ,
                statusId: data.status,
                assignedTo: `${data.person[0].firstName} ${data.person[0].lastName}`,
                dueDate: data.date
              })
            break;
        
          default:
            break;
        }
      }
    )
  }

  openTaskDialog() {
    const dialogRef = this.dialog.open(TaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
