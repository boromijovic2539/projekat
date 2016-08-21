import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {SearchPipeIme} from 'app/pipe/searchIme';
import {SearchPipeUsername} from 'app/pipe/searchUsername';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';

@Component({ 
  selector: 'SviKorisnici', 
  templateUrl: 'app/sviKorisnici/sviKorisnici.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS],
  styleUrls: ['css/dataTable/style.css','css/dataTable/normalize.css','css/dataTable/stil.css'],
  pipes: [SearchPipeIme, SearchPipeUsername]
})

export class SviKorisniciComponent {
    
  loginForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  korisnici: Object[];
  firstName: String ="";
  username: String ="";
  serviceResponse: String;

  constructor(builder: FormBuilder, http: Http,  router: Router) {
    	this.http = http;
    	this.router = router;
    	var headers = new Headers();

    	http.get('http://localhost/php/getsvikorisnici.php',{headers:headers})
    		.map(res => res.json()).share()
    		.subscribe(korisnici => {this.korisnici = korisnici.korisnici;
            setInterval(function(){
                $('#example').dataTable({
                    paging:false,
                    searching:false
                });
            },200);
            });
  }

  public deleteKorisnik(korisnik){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.get('http://localhost/php/deletekorisnik.php?id='+korisnik.id_korisnik, {headers:headers})
          .map(res => res.json())
          .subscribe( data => this.serviceResponse = data);
      location.reload();

  }
} 