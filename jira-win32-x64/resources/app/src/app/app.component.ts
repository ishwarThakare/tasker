import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
export interface Item { name: string; }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public taskData;
  constructor(public db: AngularFirestore,private afs: AngularFirestore,
    ) {
      this.taskData=[]
  }
  ngOnInit(){
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
