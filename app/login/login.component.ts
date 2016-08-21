import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'Login',
  templateUrl: 'app/login/login.html',
  directives: [FORM_DIRECTIVES],
})

export class LoginComponent {

  loginForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;

  constructor(builder: FormBuilder, http: Http,  router: Router) {
  	this.http = http;
  	this.router = router;
    this.loginForm = builder.group({
       username: ["", Validators.none],
       password: ["", Validators.none],
     });

     if(localStorage.getItem('admin') != null){
       this.router.parent.navigate(['./SviProizvodi']);
     }
     else if(localStorage.getItem('token') != null){
  		 this.router.parent.navigate(['./About']);
     }

  }
  onLogin(): void {
  	var data = "username="+this.loginForm.value.username+"&password="+this.loginForm.value.password;
  	var headers = new Headers();

  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
  	this.http.post('http://localhost/php/loginservice.php',data, {headers:headers})
      .map(res => res)
      .subscribe( data => this.postResponse = data,
  	err =>  alert(JSON.stringify(err)),
          () => {
              if(this.postResponse._body.indexOf("error") === -1){
                  var obj = JSON.parse(this.postResponse._body);

                    if(obj.username=="admin"){
                      localStorage.setItem('admin', obj.token);
                      this.router.parent.navigate(['./SviProizvodi']);
                    }else{
                      localStorage.setItem('token', obj.token);
                      this.router.parent.navigate(['./About']);
                    }
                }else{
                  var obj = JSON.parse(this.postResponse._body);
                  alert("Pogrešan email i lozinka");
                  console.log("Pogrešan email i lozinka");
                  this.router.parent.navigate(['./Login']);
              }
          }
      );
  }


}