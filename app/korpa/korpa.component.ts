import { Component, Directive } from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'


@Component({
 selector: 'Korpa',
 templateUrl: 'app/korpa/korpa.html',
 directives: [FORM_DIRECTIVES],
 viewBindings: [FORM_BINDINGS]
})
export class KorpaComponent { 

proizvodi: Object[];
values: Object[] = [];


		constructor(http: Http){
			http.get('proizvodi.json')
			.map(res => res.json())
			.subscribe(proizvodi => this.proizvodi = proizvodi);
			
		}

		ngOnInit(){
		
			var keys = Object.keys(localStorage);
       		var i = keys.length-1;
       		var j = keys.length-1;
       		var o = 0;
       		var kol=0;
			var cena=0;

        	while ( i-- ) {
	        	this.values.push(JSON.parse(localStorage.getItem(keys[i])));
			}

			while( j-- ){

				kol = kol + parseInt(this.values[o].kolicina);
				cena = cena + (parseInt(this.values[o].cena) * parseInt(this.values[o].kolicina) / 1000); 
				o++;
			}
			console.log(kol);
			console.log(cena);
			this.kolRa = cena;
		}

		obrisiStavku(item){

			  	localStorage.removeItem(item.id);
				this.ngOnInit();
				location.reload();
			  
		}
}