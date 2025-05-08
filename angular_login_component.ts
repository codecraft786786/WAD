import { Component } from '@angular/core'; 
import { Router } from '@angular/router'; 
@Component({ 
selector: 'app-login', 
templateUrl: './login.component.html', 
styleUrls: ['./login.component.css']}) 
export class LoginComponent { 
constructor(private router: Router) {} 
userArray: any[] = []; 
data = {    email: '', password: '' };   
doLogin() { 
this.userArray = JSON.parse(localStorage.getItem('users') || '[]'); 
const matchedUser = this.userArray.find((e) => { 
return this.data.email === e.email && this.data.password === e.password;    }); 
if (matchedUser) { 
alert("Login Successful"); 
localStorage.setItem('loggedInUser', JSON.stringify(matchedUser)); 
this.router.navigate(['/profile']); 
} else { 
alert("Please Provide Proper Credentials");} } 
doRegistration() { 
this.router.navigate(['/registration']); }}