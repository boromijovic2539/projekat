import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';


@Component({
 selector: 'Contact',
 templateUrl: 'app/contact/contact.html',
 styleUrls: ['css/form.css'],
 providers: [HTTP_PROVIDERS]
})

export class ContactComponent {
 registerForm: ControlGroup;
 http: Http;
 router: Router;
 postResponse: String;
 constructor(builder: FormBuilder, http: Http,  router: Router) {
  this.http = http;
  this.router = router;
  this.registerForm = builder.group({
   tvojeime: ["", Validators.none],
   naslov: ["", Validators.none],
   poruka: ["", Validators.none]
  });



 }
 onSubmit(): void {
  var data = "tvojeime="+this.registerForm.value.tvojeime+"&naslov="+this.registerForm.value.naslov + "&poruka="+this.registerForm.value.poruka;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http.post('http://localhost/php/phpmail/mail.php',data, {headers:headers})
      .map(res => res)
      .subscribe( data => this.postResponse = data,
          err =>  {
           this.router.parent.navigate(['./About']);
          }
      );

 }
}