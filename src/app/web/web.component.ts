import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

     hasSent: boolean = false;
    isWait: boolean  = false;
    errorOccured: boolean = false;

  constructor(private snackBar : MatSnackBar, private http : Http) { }
  
   openSnackBar() {
		this.snackBar.open("Message sent. Thank you for your time.", "OK", {
	
		});
     }
	 openSnackBar2() {
		this.snackBar.open("An unexpected error occured. Please check your internet connection.", "OK", {
	
		});
     }
	 
	 
	 onSend(form)
		{
		
			this.isWait = true;
		
			let message  = {
					name: form.value.name,
 					email: form.value.email,
 					phone: "Not Shared",
					message: form.value.message	
			}
			
			
			
			
	 this.http.post('https://url222-url.firebaseio.com/response.json',message).subscribe((response)=>{
					
					this.isWait = false;
					
					this.openSnackBar();

					
					form.reset();
					
	 }, (error)=>{
				this.isWait = false;
				
				
				this.openSnackBar2();
		 })
	
		 
		
		}
	 
	 

  ngOnInit() {
  }

}
