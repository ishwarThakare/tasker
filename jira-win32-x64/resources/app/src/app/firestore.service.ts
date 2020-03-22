import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { environment } from '../../../../environments/environment';
import { Observable, of, Subscription, Subject } from 'rxjs';
import { map } from "rxjs/operators";
//import { ApiHeaderService } from 'app/shared/services/api-header/api-header.service';
//import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
/* import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription'; */
//import { AngularFireAuth } from 'angularfire2/auth';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
/* interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
} */

/**
 * All Firestore related api calls
 */
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  /**To store activities subscription */
  public subsciptions: Subscription;
  /** To store comments */
  public activities = new Subject<any>();
  /** to share comments which can be subscribed, */
  public activities$ = this.activities.asObservable();
  /**Firestore Collection*/
 // private itemsCollection: AngularFirestoreCollection<any>;
  /*   user: Observable<User>; */ 

  /**
   * initialization of options
   * @param http HttpClient instance
   * @param angularFirestore instance of AngularFirestore
   * @param afAuth instance of AngularFireAuth
   */
  constructor(private http: HttpClient,
    public db: AngularFirestore
   // private angularFirestore: AngularFirestore,
  //  private afAuth: AngularFireAuth,
  ) {
/* 
    this.afAuth.auth.signInWithEmailAndPassword('bkvishe@gmail.com', 'Choice@123').then((res) => {
      console.log(res, 'AUTHHH');
      this.itemsCollection = this.angularFirestore.collection<any>('neuron');
      console.log("Co;;",this.itemsCollection)
      this.subscribeUserActivities('ishwar')
    }) */
/*     this.afAuth.authState.subscribe(user => {
      if (user)
        console.log(user, "pol")
    }) */

   
   
/*     this.angularFirestore.collection('neuron').valueChanges().subscribe((res) => {
      console.log("value changes: ",res)
    }) */

  }



  /**
   * Update activity on firestore
   * @param nonEnckey lead,comment,email,reminder,ticket
   * @param activity Activity payload 
   */
  updateActivity(user: any, data: any): any {
 /*    console.log(data) */
    let setDoc = this.db.collection('users').doc(user).set(data);
/*     if(this.itemsCollection){
    let docRef = this.itemsCollection.doc(user).ref;
    console.log("doc ref",docRef)
    //  docRef= this.itemsCollection.doc(user).ref
    this.angularFirestore.firestore.runTransaction((t) => {
      console.log("T",t)
      return t.get(docRef).then((doc) => {
        console.log("inside the doc",doc)
        // doc doesn't exist; can't update
        if (!doc.exists || !doc.data()[user]) {
          console.log('!exist')
          //  if user not found;
          let dataToPass = {}
          dataToPass[user] = [data]
          t.set(docRef, dataToPass, { merge: true });
        } else {
          console.log('exist')
          //   If user found;
          //const newImagesArray = doc.get('images2').push( {downloadUrl: url} );
          const existingActivities = doc.data()[user];
          existingActivities.push(data);
          let dataToPass = {}
          dataToPass[user] = existingActivities
          t.set(docRef, dataToPass, { merge: true });
        }
      }).catch(function (error) {
        console.log('catch',error)
  
      });;
    }).then(() => {
      console.log('then')
      this.subscribeUserActivities(user);
    }).catch(function (error) {
      console.log('catch')

    });

  } */
  }

  /**
   * Get list of activities
   * @param nonEncPanNum user pan number
   */
  getActivityList(nonEncPanNum: any): any{
 /*    if(this.itemsCollection){
    let docRef = this.itemsCollection.doc(nonEncPanNum).ref;
    let activityListObservable = docRef.get().then((doc) => {
      console.log(doc,".....")
      let result = {}
      if (doc.exists || doc.data()[nonEncPanNum]) {
        result = { data: doc.data()[nonEncPanNum], headerStatus: 'SUCCESS' }
      }
      else {
        result = { data: [], headerStatus: 'SUCCESS' }
      }
      return result;
    }).catch(function (error) {
      let result = { data: [], headerStatus: 'FAILED' }
      return result;
    });
    return activityListObservable;} */
  }

  /**
   * Subscibe to use activities
   * @param nonEncPanNum Pan number
   */
  subscribeUserActivities(user): void {
/*     this.subsciptions = this.angularFirestore.collection('neuron').doc(user).valueChanges().subscribe((res) => {
      let result = {}
      if (res && res[user]) {
        this.activities.next(res[user])
        result = { data: res[user], headerStatus: 'SUCCESS' }
      }
      else {
        result = { data: [], headerStatus: 'SUCCESS' }
        this.activities.next([])
      }
      return result;
    }, error => {
      // this.activities.next([])
      let result = { data: [], headerStatus: 'FAILED' }
      return result;
    }) */
  }

  /**
   * Unsubscribe activities
   * @param nonEncPanNum Pan number
   */
  unSubscribeUserActivities(): void {
    if (this.subsciptions) {
      this.subsciptions.unsubscribe();
    }
  }
}
