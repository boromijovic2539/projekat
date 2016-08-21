import { Component, Directive, OnInit } from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';



@Component({
 selector: 'Recipes',
 templateUrl: 'app/recipes/recipes.html',
 directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
 viewBindings: [FORM_BINDINGS]
})

export class RecipesComponent implements OnInit{ 

 	builder: FormBuilder;
 	http: Http;
	recepti: Object[] = [];
	ada: Object[];
	router: Router;  
	opisPripreme: String;

 	constructor(private http:Http, router: Router) {
	 		this.router = router;

	 		var headers = new Headers();
       	headers.append('Content-Type', 'application/x-www-form-urlencoded');
			this.http.get('http://localhost/php/getrecepti.php',{headers:headers})
			.map(res => res.json()).share()
       			 .subscribe(recepti => {
          		  this.recepti = recepti.recepti; 
          		
          		  this.setAda(this.recepti);
          		  this.setOpisiRecepata();
		           
       	});
    }

    setAda(recepti: Object){
    	this.ada = recepti;
    }


	ngOnInit(){
	}

	ucitaj(file: String, recept: Object): void {


	    	var XMLHttpRequestObject = false; 
	      	if (window.XMLHttpRequest) {
	       		XMLHttpRequestObject = new XMLHttpRequest();

	      	}else if(window.ActiveXObject) {
	        	XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	     	}
	 
		  	var dataSource = file;
		  	var divID ='fileDisplayArea';


	        if(XMLHttpRequestObject) {
	          	var obj = document.getElementById(divID); 
	        	XMLHttpRequestObject.open("GET", dataSource); 
	 			 
	          	XMLHttpRequestObject.onreadystatechange = function(){ 

		   	 		if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) { 
		        		recept.opis_pripreme = XMLHttpRequestObject.responseText;
		        	
		     		} else{

		     		}
		        } 
		        XMLHttpRequestObject.send(null); 
	        }
	 }


	 setOpisiRecepata(){
	 	var vel = this.recepti.length;
	 	var i = 0;
	 	var file;

	 		while(vel !== 0){

	 			file = this.recepti[i].opis_pripreme;
	 			this.ucitaj(file, this.recepti[i]);
	 			//this.recepti[i].opis_pripreme = this.opisPripreme;
	 			console.log(this.recepti[i].opis_pripreme);
	 			this.setOpis();

	 			i++;
	 			vel--;
	 		}

	}


	getOpis(){
		return this.opisPripreme;
	}
	setOpis(){
		this.opisPripreme = "";
	}
}


	
