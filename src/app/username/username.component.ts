import {Component, NgModule, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ]
})


export class UsernameComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

}
