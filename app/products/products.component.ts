import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';



@Component({
 selector: 'Products',
 templateUrl: 'app/products/products.html',
 directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
 viewBindings: [FORM_BINDINGS]
})

export class ProductsComponent { 
 	korpaForm: ControlGroup;
 	builder: FormBuilder;
 	http: Http;

 	public brojac;
 	public jeste=false;
	private tip="voce";
	public k ="tip=";

	proizvodi: Object[];
	router: Router;  

	private korpa = [];
	private kolicinaKorpa = [];

	kolicina: Control;

	 constructor(private builder: FormBuilder, private http:Http, router: Router) {
	 		this.router = router;
	 		this.setBrojac();
	 		this.getMeni();
	 		this.setForm();
      }

      setForm(builder: FormBuilder){
      	this.kolicina = new Control('', Validators.required);

      	this.korpaForm = this.builder.group({
      		kolicina: this.kolicina;
      	});
      }

      setBrojac(){
	      if(!this.jeste){
	     	 this.brojac=0;
	     	 this.jeste=true;
	      }
      }
      	
		getMeni(){
			var podatak = this.k.concat(this.tip);
			
        	var headers = new Headers();
        	headers.append('Content-Type', 'application/x-www-form-urlencoded');
			this.http.post('http://localhost/php/getmeni.php',podatak,{headers:headers})
			.map(res => res.json()).share()
       			 .subscribe(proizvodi => {
          		  this.proizvodi = proizvodi.proizvodi; 
       		 });
		}

		ubaciUKorpu(item){
			if(this.korpaForm.value.kolicina == ""){
				alert("Greska! Popunite kolicnu.");
				console.log("greska");
			}
	  		else if(localStorage.getItem('token') !== null){
				item['kolicina'] = this.korpaForm.value.kolicina;
				console.log(this.korpaForm.value);
				this.korpa.push(item);
			    alert("Proizvod " + item.naziv + " je dodat u korpu. Kolicina: "+this.korpaForm.value.kolicina+"g");
			    localStorage.setItem(''+item.id, JSON.stringify(item));
			   this.reset();
			}else{
				this.router.parent.navigate(['./Login']);
			}

		}

		reset() {
  		  this.setForm();
  		}

		getVoce(){
			this.tip = "voce";
			this.getMeni();
		}

		getPovrce(){
			this.tip = "povrce";
			this.getMeni();
		}

		getMeso(){
			this.tip = "meso";
			this.getMeni();
		}

		getMlecni(){
			this.tip = "mlecni proizvodi i jaja";
			this.getMeni();	
		}
			}

		
	}
