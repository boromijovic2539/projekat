import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import 'rxjs/Rx';
import { Component, Directive } from 'angular2/core';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
    selector: 'Register',
    templateUrl: 'app/register/register.html',
    directives: [FORM_DIRECTIVES],
    viewBindings: [FORM_BINDINGS]
})

export class RegisterComponent {

    registerForm: ControlGroup;
    http: Http;
    router: Router;
    postResponse: String;

    constructor(builder: FormBuilder, http: Http,  router: Router) {
        this.http = http;
        this.router = router;
        this.registerForm = builder.group({
            username: ["", Validators.none],
            password: ["", Validators.none],
            firstName: ["", Validators.none],
            lastName: ["", Validators.none],
        });

        if(localStorage.getItem('token') != null){
            this.router.parent.navigate(['./About']);
        }

    }
    onRegister(): void {
        var data = "username="+this.registerForm.value.username+"&password="+this.registerForm.value.password+"&firstName="+this.registerForm.value.firstName+"&lastName="+this.registerForm.value.lastName;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/registerservice.php',data, {headers:headers})
            .map(res => res)
            .subscribe( data => this.postResponse = data,
                err => alert(JSON.stringify(err)),
                    () => { 
                     if(this.postResponse._body.indexOf("error") === -1){
                        var obj = JSON.parse(this.postResponse._body);
                        localStorage.setItem('token', obj.token);
                        this.router.parent.navigate(['./About']);
                     }else{
                        var obj = JSON.parse(this.postResponse._body);
                     }
                     }
                );
    }
}
