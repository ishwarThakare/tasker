import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
/* import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestoreModule
} from 'angularfire2/firestore';
 */import { HttpClientModule } from '@angular/common/http';
import { FirestoreService } from './firestore.service';
import { ProjectMasterComponent } from './project-master/project-master.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
let firebaseConfig={    
  apiKey: "AIzaSyAxsJriq2K_uBeerZMFXEP3g-284vUTmbU",
  authDomain: "jira-89e86.firebaseapp.com",
  databaseURL: "https://jira-89e86.firebaseio.com",
  projectId: "jira-89e86",
  storageBucket: "jira-89e86.appspot.com",
  messagingSenderId: "714179825107",
  appId: "1:714179825107:web:30531fd39053081ef93326",
  measurementId: "G-NK5PX837P4"
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectMasterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
 /*    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule, */
    HttpClientModule,
  ],
  providers: [FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { 
/*   constructor( private afAuth: AngularFireAuth,){
  
  } */
}
