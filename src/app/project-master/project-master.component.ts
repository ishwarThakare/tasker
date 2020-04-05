import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FirestoreService } from '../firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-master',
  templateUrl: './project-master.component.html',
  styleUrls: ['./project-master.component.scss']
})
export class ProjectMasterComponent implements OnInit {
  allProjects:any
projectForm:any;
stepList:any
  constructor(
    public db: AngularFirestore,
    private router: Router,
    private fb:FormBuilder,
    private firestoreService: FirestoreService
    ) {
      this.stepList=[] 
      this.allProjects=[]
    }
  ngOnInit() {
    this.projectForm = this.fb.group({
      projectName: ['',Validators.required],
      projectStep: [''],
    });
    
    
    this.db.collection('users').valueChanges().subscribe(data=>{
      this.allProjects=data&&data.length?data[0]['pro']:[];
      console.log("value change",this.allProjects)
    })
    
  }
  
  goToDashboard(project){
    this.router.navigate(['dashboard/'+project.projectName])
  }

  removeStep(i){
    this.stepList.splice(i,1)
  }
  
  addStep(step){
    if(this.stepList.length<=6)
{    this.projectForm.patchValue({projectStep:''})
  this.stepList.push(step)      }
  }


  onSubmit() {
      this.allProjects.push({
        projectName:this.projectForm.value.projectName,
        lifeCycleNames: this.stepList,
        lifeCycleData:{},
        lifeCycleDataArr:[],
        themeName:''
      })
      this.firestoreService.updateActivity('ishwar',{pro:this.allProjects})
      this.projectForm.reset()
      this.stepList=[]

  }
}
