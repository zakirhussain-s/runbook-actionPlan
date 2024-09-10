import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionPlanComponent } from './actionPlan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ActionPlanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // template: '<app-action-plan></app-action-plan>'
})
export class AppComponent {
  title = 'runbook-actionPlan';
}
