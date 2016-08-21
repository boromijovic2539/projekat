import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {SearchPipeGi} from 'app/pipe/searchGi';
import {SearchPipeNaziv} from 'app/pipe/searchNaziv';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';

@Component({ 
  selector: 'SviProizvodi', 
  templateUrl: 'app/sviProizvodi/sviProizvodi.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS],
  styleUrls: ['css/dataTable/style.css','css/dataTable/normalize.css','css/dataTable/stil.css'],
  pipes: [SearchPipeGi, SearchPipeNaziv]
})

export class SviProizvodiComponent {
    
  loginForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  glikemijski_indeks: String ="";
  naziv: String ="";
  proizvodi: Object[];
  serviceResponse: String;

  constructor(builder: FormBuilder, http: Http,  router: Router) {
    	this.http = http;
    	this.router = router;
    	var headers = new Headers();

    	http.get('http://localhost/php/getproducts.php',{headers:headers})
    		.map(res => res.json()).share()
    		.subscribe(proizvodi => {this.proizvodi = proizvodi.proizvodi;
            setInterval(function(){
                $('#example').dataTable({
                    paging:false,
                    searching:false
                });
            },200);
            });
  }

  public deleteProizvod(proizvod){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.get('http://localhost/php/deleteproizvod.php?id='+proizvod.id_proizvod, {headers:headers})
          .map(res => res.json())
          .subscribe( data => this.serviceResponse = data);
      location.reload();

  }



} 