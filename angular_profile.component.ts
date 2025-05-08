import { Component, OnInit } from '@angular/core'; 
@Component({ 
selector: 'app-profile', 
templateUrl: './profile.component.html', 
styleUrls: ['./profile.component.css'] }) 
export class ProfileComponent implements OnInit { 
user: any = {}; 
ngOnInit(): void { 
this.user = JSON.parse(localStorage.getItem('loggedInUser') || '{}'); } 
logout() { 
localStorage.removeItem('loggedInUser'); 
location.href = '/login';}}