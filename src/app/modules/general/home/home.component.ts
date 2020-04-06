import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




@Injectable()
export class HomeComponent implements OnInit {
  formSignIn: FormGroup;  
  posts : any
  features: any;
  loading = false;

  constructor(
    public http: HttpClient,
    public formBuilder: FormBuilder,
    public router: Router,
    private meta: Meta,
    private titleService: Title) {


  }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept' : 'application/json'
    })
  }
  get f() { return this.formSignIn.controls; }
  ngOnInit() {


    this.http.get("https://api.myapp.pt" + '/events/getall', this.httpOptions).subscribe(
      (response) => 
      this.posts = response
  );

  }



  getAll(callback){

       
   
    
}

}