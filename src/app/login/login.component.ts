import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  projectList
  constructor(private router: Router
  ) { 
    this.projectList=[
     {name: 'Neuron'}
    ]

  }

  ngOnInit() {

  }
  goToMaster(){
    this.router.navigate(['/master'])

  }
  goToDashboard()
  {
    this.router.navigate(['/dashboard/neuron'])
  }

}
