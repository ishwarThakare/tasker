import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FirestoreService } from '../firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction,
  Action,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public projectData:any;


  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  public cardData:any
  public num;
  public lifeCycles:any;
  public taskData;
  constructor(private firestoreService: FirestoreService,
    public db: AngularFirestore,private afs: AngularFirestore,) {
/*     this.firestoreService.activities$.subscribe(
      res => {
        console.log("RES: AA:",res)
        if (res && res.length > 0) {
        }
      }
    ); */
/*     this.projectData={
      projectName:'Neuron',
      lifeCycleNames:['To Do','In Progress','Pending For Review','In Review','Done'],
      lifeCycleData:{},
      lifeCycleDataArr:[],
      themeName:''
    } */
    this.cardData={0:{taskName:'RTA file upload'},1:{taskName:'Feedback'}}
    this.num=2;
    this.lifeCycles=['To Do','In Progress','In Review','Done']
  
   }

  ngOnInit() {
    
   /*  let docRef =   this.db.collection('users').doc('ishwar').ref;
    docRef.get().then((doc) => {
      this.projectData=doc.data()
     console.log("AAA",doc.data())
   }).catch(function (error) {
     
   }); */
   this.db.collection('users').valueChanges().subscribe(data=>{
     //console.log("value change: ",data[0]);
     this.projectData=data[0]
   })
   
    this.db.collection('users').get().subscribe
    ((snapshot) => {
      snapshot.forEach((doc) => {
       // console.log(doc.id, '=>', doc.data());
        if(doc.data())
{ 
  // let prevTheme=JSON.parse(JSON.stringify(this.projectData.themeName));
         this.projectData=doc.data();
         this.convertLifeCycleNames();
         this.changeTheme(this.projectData.themeName||'mb')
       
        //  console.log(prevTheme," lll ",this.projectData.themeName)
        //  if(prevTheme!=this.projectData.themeName){
        //    console.log("called")
        //  }
}else{
  this.projectData={
    projectName:'Neuron',
    lifeCycleNames:['To Do','In Progress','Pending For Review','In Review','Done'],
    lifeCycleData:{},
    lifeCycleDataArr:[],
    themeName:''
  }
}      });
    })
    //this.firestoreService.subscribeUserActivities('ishwar');
    //this.getActivity()
/*     if(this.projectData&&this.projectData.projectName)
{    this.convertLifeCycleNames();
    this.changeTheme(this.projectData.themeName||'mb')
} */
  }

  ngAfterViewInit(){
    console.log("After init")
    if(this.projectData&&this.projectData.projectName)
{     console.log("After init",this.projectData.themeName)

     this.convertLifeCycleNames();
    this.changeTheme(this.projectData.themeName||'mb')
}
  }

  /**unsubscribe user activities */
  ngOnDestroy() {
    this.firestoreService.unSubscribeUserActivities();
  }
removeElement(i,j){
  this.projectData.lifeCycleDataArr[i].data.splice(j, 1);
  this.firestoreService.updateActivity('ishwar',this.projectData)
}
  convertLifeCycleNames(){
/*     this.projectData.lifeCycleNames.forEach(element => {
      this.projectData.lifeCycleData[this.camelCase(element)]={name:element,data:[]}
    });   */
    this.projectData.lifeCycleNames.forEach(element => {
      this.projectData.lifeCycleDataArr.push({key:this.camelCase(element),name:element,data:[]})
    });  
    
  }
  /**Get activities of pan number */
  getActivity(): void {
    this.firestoreService.getActivityList('test').then((activities) => {
/* console.log("actacta",activities) */
    }).catch((error) => {
   
    });
  }
  camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
   /*  console.log(this.projectData) */
    this.firestoreService.updateActivity('ishwar',this.projectData)
  }

  trackByKey(index: number, cardData: any): string {
/*     console.log(cardData) */
    return cardData.key;
}
  fillDark(){
    var c = document.createElement('canvas'),        
    ctx = c.getContext('2d'),
    cw = c.width = 200,
    ch = c.height = 200;

for( var x = 0; x < cw; x++ ){
    for( var y = 0; y < ch; y++ ){
      ctx.fillStyle = 'hsl(0, 0%, ' + ( 100 - ( Math.random() * 120 ) ) + '%)';
      ctx.fillRect(x, y, 1, 1);
    }
    //#181818
}
  document.body.style.background = 'url(' + c.toDataURL() + ')';

  }

/*   fillYellow(ctx,x,y){
    ctx.fillStyle = 'hsl(57, 52%, ' + ( 100 - ( Math.random() * 120 ) ) + '%)';
    ctx.fillRect(x, y, 1, 1);
} */
  fillPink(){
    var c = document.createElement('canvas'),        
    ctx = c.getContext('2d'),
    cw = c.width = 200,
    ch = c.height = 200;

for( var x = 0; x < cw; x++ ){
    for( var y = 0; y < ch; y++ ){
      ctx.fillStyle = 'hsl(0, 82%, ' + ( 100 - ( Math.random() * 120 ) ) + '%)';
      ctx.fillRect(x, y, 1, 1);
    }
    //#181818
}
  document.body.style.background = 'url(' + c.toDataURL() + ')';

  }
/*   addCard(){
    this.cardData[this.num]={};       
    this.num++;
  }

  addCard2(){
    this.todo.unshift("Test")
  } */
  
  addCard3(){
    this.projectData.lifeCycleDataArr[0].data.unshift({taskName:''})
    this.firestoreService.updateActivity('ishwar',this.projectData)
  }

  setTaskValue(event,i,j){
    this.projectData.lifeCycleDataArr[i].data[j].taskName=event.target.value;
    this.firestoreService.updateActivity('ishwar',this.projectData)
  }



  changeTheme(color){
    this.projectData.themeName=color;
    //console.log(this.projectData.themeName)
    this.firestoreService.updateActivity('ishwar',this.projectData)
    switch(color){
      case 'dt':
        this.fillDark()
      break;
      case 'mb':
          document.body.style.background='#181818'
      break;
      case 'b':
          document.body.style.background='#000000'
      break;
      case 'pt':
          this.fillPink()
      break;
      case 'light':
          document.body.style.background='rgba(170, 170, 170, 0.18)'
        break;
      case 'img':
          document.body.style.backgroundRepeat="repeat"
          document.body.style.backgroundImage="url('assets/dashboard_background.jpg')"
      break;
      default:
         
          document.body.style.background='#181818'
          break;
    }

  }



  
  addTask(task){
    this.taskData.push(task);
    this.addData({task:this.taskData})
  }


  addData(data){    
    // Add a new document in collection "cities" with ID 'LA'
    let setDoc = this.db.collection('users').doc('ishwar').set(data);
  }


  subData(){
/* 
      let docRef =   this.db.collection('users').doc('ishwar').ref;
       docRef.get().then((doc) => {
        console.log(doc.data())
      }).catch(function (error) {
        
      }); */
     
  }

  getData(){

  }

}
