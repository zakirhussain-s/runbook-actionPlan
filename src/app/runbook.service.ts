import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RunbookService{
    private avaibaleRunBooksSubject = new BehaviorSubject<RunBook[]>([
        {id: 1, name: 'Execute Command', type:"command", params:{command: ''}},
        {id: 2, name: 'Run Script', type:"script", params:{filePath: ''}},
    ]);

    private actionPlanSubject = new BehaviorSubject<RunBook[]>( []);

    getAvailabelRunBooks(): Observable<RunBook[]>{
        return this.avaibaleRunBooksSubject.asObservable();
    }

    getActionPlan(): Observable<RunBook[]>{
        return this.actionPlanSubject.asObservable();
    }

    addToActionPlan(runBook: RunBook){
        const currentActionPlan = this.actionPlanSubject.value;
        this.actionPlanSubject.next([...currentActionPlan,{...runBook, id: Date.now()}]);
    }

    removeFromActionPlan(runBookId: number){
        const currentActionPlan = this.actionPlanSubject.value;
        this.actionPlanSubject.next(currentActionPlan.filter(r => r.id != runBookId));
    }
}

interface RunBook{
    id: number;
    name: string;
    type: 'command' | 'script';
    params: { [key:string]: string};
}