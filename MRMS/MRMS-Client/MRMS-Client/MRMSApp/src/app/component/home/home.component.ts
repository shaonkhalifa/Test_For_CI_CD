import { Component } from '@angular/core';
import { Dashboard } from '../../models/demandSection/dashboard';
import { DashboardService } from '../../services/demandSection/dashboard.service';
import { NotificationService } from '../../services/Shared/notification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dashboard: Dashboard = new Dashboard;

  constructor(
    private dashboardSvc: DashboardService,
    private notificationSvc: NotificationService
  ) { }

  ngOnInit(): void {
    this.dashboardSvc.get()
      .subscribe(x => {
        this.dashboard = x;
        console.log(x);
      }, err => {
        this.notificationSvc.message("Failed to load data!!!", "DISMISS");
      });
  }
}
