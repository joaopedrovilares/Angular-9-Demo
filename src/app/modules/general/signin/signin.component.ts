import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin: FormGroup;
  posts: any
  features: any;
  loading = false;
  submitted = false;
  errorEmail = "Error";



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
      'Accept': 'application/json'
    })
  }


  ngOnInit() {

    this.signin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.http.get("https://api.myapp.pt" + '/events/getall', this.httpOptions).subscribe(
      (response) =>
        this.posts = response
    );

  }


  onSubmit() {
    this.submitted = true;
  }
  get f() { return this.signin.controls; }

}