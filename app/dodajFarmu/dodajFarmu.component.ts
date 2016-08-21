import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
    selector: 'DodajFarmu',
    templateUrl: 'app/dodajFarmu/dodajFarmu.html',
    directives: [FORM_DIRECTIVES],
    styleUrls: ['app/dodajFarmu/css/style.css'],
    viewBindings: [FORM_BINDINGS]
})

export class DodajFarmuComponent {

    registerForm: ControlGroup;
    http: Http;
    router: Router;
    postResponse: String;

    constructor(builder: FormBuilder, http: Http,  router: Router) {
        this.http = http;
        this.router = router;
        this.registerForm = builder.group({
            naziv: ["", Validators.none],
            podneblje: ["", Validators.none],
            adresa: ["", Validators.none],
            telefon: ["", Validators.none]
        });
    }

    dodajFarmu(event): void {
        var data = "naziv="+this.registerForm.value.naziv+"&podneblje="+this.registerForm.value.podneblje+"&adresa="+this.registerForm.value.adresa+"&telefon="+this.registerForm.value.telefon;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/dodajfarmu.php',data, {headers:headers})
            .map(res => res)
            .subscribe( data => this.postResponse = data,
                 err => alert(JSON.stringify(err)), 
                () => {
                if(this.postResponse._body.indexOf("error") === -1){
                    alert("Uspesno dodavanje farme");
                    this.router.parent.navigate(['./UnosProizvoda']);
                }else{
                        alert("Neuspesno dodavanje farme");
                    }
                }
            );
    }
}
