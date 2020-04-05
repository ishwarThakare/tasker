import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd, NavigationExtras } from '@angular/router';

export interface Item { name: string; }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public taskData;
    /** Represents if event triggered before lazy loading a route config or when a route has been lazy loaded.*/
    public loadingRouteConfig: boolean;

  constructor(public db: AngularFirestore,private afs: AngularFirestore,
    private router: Router,

    ) {
      this.taskData=[]
  }
  ngOnInit(){
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }})
/*     this.db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  }); */
/* 
  this.db.collection('users').get().subscribe
  ((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      this.taskData=doc.data().task;
      console.log(this.taskData)
    });
  }) */
//this.addData({task:[]})

/* this.addTask('heyy') */
  }

  addTask(task){
    this.taskData.push(task);
    this.addData({task:this.taskData})
  }


  addData(data){    
    // Add a new document in collection "cities" with ID 'LA'
    let setDoc = this.db.collection('users').doc('ishwar').set(data);
  }

}
