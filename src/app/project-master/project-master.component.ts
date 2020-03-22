import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-project-master',
  templateUrl: './project-master.component.html',
  styleUrls: ['./project-master.component.scss']
})
export class ProjectMasterComponent implements OnInit {
  projectList
  constructor(private router: Router
  ) { 
    this.projectList=[
     {name: 'Neuron'}
    ]

  }

  ngOnInit() {

  }
  goToDashboard()
  {
    this.router.navigate(['/dashboard/neuron'])
  }
}
