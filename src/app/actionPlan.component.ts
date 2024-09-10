import { Component } from "@angular/core";
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { RunbookService } from "./runbook.service";
import { CommonModule } from "@angular/common";
  
@Component({
    selector:'app-action-plan',
    standalone: true,
    templateUrl: 'actionPlan.component.html',
    styleUrl: 'actionPlan.component.css',
    imports:[CommonModule, DragDropModule]
})

export class ActionPlanComponent{
    availableRunBooks: RunBook[] =[
        {id: 1, name: 'Execute Command', type:"command", params:{command: ''}},
        {id: 2, name: 'Run Script', type:"script", params:{filePath: ''}},
    ];

    availableRunbooks: RunBook[] = [];
    actionPlan: RunBook[] = [];
    
    constructor(private runbookService: RunbookService) { }

  ngOnInit(): void {
    this.runbookService.getAvailabelRunBooks().subscribe(runbooks => {
      this.availableRunbooks = runbooks;
    });

    this.runbookService.getActionPlan().subscribe(actionPlan => {
      this.actionPlan = actionPlan;
    });
  }

    drop(event: CdkDragDrop<RunBook[]>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
          );
        }

        if (event.container.id === 'actionPlanList') {
            this.runbookService.addToActionPlan(event.container.data[0]);
          } else {
            this.runbookService.removeFromActionPlan(event.container.data[0].id);
          }
      }

      configureRunbook(runbook: RunBook) {
        console.log('Configuring runbook:', runbook);
      }
}

interface RunBook{
    id: number;
    name: string;
    type: 'command' | 'script';
    params: { [key:string]: string};
}