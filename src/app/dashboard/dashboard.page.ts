import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { format } from 'date-fns';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers:[Storage]
})
export class DashboardPage implements OnInit {

  minDate = format(new Date(), "yyyy-MM-dd");
  maxDate = new Date().getFullYear()+2;

  postData = {
    destination:'',
    Date:''
  }

  formlogin : FormGroup;


  constructor(
    private router: Router,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private storage: Storage,
    formBuilder : FormBuilder
  ) 
  { 
    this.formlogin = formBuilder.group({
      destination : new FormControl('', Validators.compose([
          Validators.required
      ])),    
      Date : new FormControl('', Validators.compose([
           Validators.required
      ]))
    });
    console.log(this.minDate,this.maxDate);
  }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    let form = this.formlogin.value; 
    this.storage.create();
    this.storage.get("selectedVenue").then(response=>{
      if(response){
        form.destination = response[0].Name;
      }
    })
  }

  getVenues(){
    this.router.navigate(['/venues']);
  }

  search(){
    debugger;
    let form = this;
    let formValues = form.formlogin.value;
    
    let SearchDate:any = [{"Date":format(new Date(formValues.Date),"yyyy-MM-dd")}];
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(SearchDate)
      }
    };
    if(formValues.Date != "" && formValues.destination == ""){
      this.router.navigate(['/venuebydate'],navigationExtras);
    }
    else if(formValues.Date != "" && formValues.destination != ""){
      alert('form is valid');

    }
    else{
      alert('empty fields');
    }

        // if(form.formlogin.valid){

        //   alert('form is valid');
        // } 
        // else {
        //   alert('empty fields');
        // }
    console.log(form.formlogin.value.Date,form.formlogin.value.destination)
    console.log(this.postData.destination,this.postData.Date);
  }

  get errorControl() {
    return this.formlogin.controls;
  }
}
