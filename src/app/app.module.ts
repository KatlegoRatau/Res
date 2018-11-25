import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';

import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerModule } from 'angular2-spinner/dist';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatricComponent } from './matric/matric.component';
import { RouterModule } from '@angular/router';

 export const config = {
    apiKey: "AIzaSyCyTJdEZGFG-tD4x_QBji44UMMalvz4gnY",
    authDomain: "url222-url.firebaseapp.com",
    databaseURL: "https://url222-url.firebaseio.com",
    projectId: "url222-url",
    storageBucket: "url222-url.appspot.com",
    messagingSenderId: "480360421089"
  };


@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    MatricComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	SpinnerModule,
	HttpModule,
	MatSnackBarModule,
	AngularFireModule.initializeApp(config),
	BrowserAnimationsModule,
	MatDividerModule,
	MatListModule,
	MatTooltipModule,
	MatCardModule,
	RouterModule.forRoot([
			{path: '', component: WebComponent},
			{path: 'matric', component: MatricComponent},
			
	])
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
