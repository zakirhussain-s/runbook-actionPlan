import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ActionPlanComponent } from "./actionPlan.component";
import { RunbookService } from "./runbook.service";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    imports:      [ BrowserModule, DragDropModule, BrowserAnimationsModule],
    declarations: [ AppComponent, ActionPlanComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ RunbookService]
  })
export class AppModule { }