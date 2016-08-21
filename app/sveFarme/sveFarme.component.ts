import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {SearchPipeNazivFarme} from 'app/pipe/searchNazivFarme';
import {SearchPipePodneblje} from 'app/pipe/searchPodneblje';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';

@Component({ 
  selector: 'SveFarme', 
  templateUrl: 'app/sveFarme/sveFarme.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS],
  styleUrls: ['css/dataTable/style.css','css/dataTable/normalize.css','css/dataTable/stil.css'],
  pipes: [SearchPipeNazivFarme, SearchPipePodneblje]
})

export class SveFarmeComponent {
    
  loginForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  farme: Object[];
  podneblje: String ="";
  naziv: String ="";
  serviceResponse: String;

  constructor(builder: FormBuilder, http: Http,  router: Router) {
    	this.http = http;
    	this.router = router;
    	var headers = new Headers();

    	http.get('http://localhost/php/getfarme.php',{headers:headers})
    		.map(res => res.json()).share()
    		.subscribe(farme => {this.farme = farme.farme;
            setInterval(function(){
                $('#example').dataTable({
                    paging:false,
                    searching:false
                });
            },200);
            });
  }

  public deleteFarma(farma){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.get('http://localhost/php/deletefarma.php?id='+farma.id_farma, {headers:headers})
          .map(res => res.json())
          .subscribe( data => this.serviceResponse = data);
      location.reload();

  }



} 