import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { ProductsComponent } from 'app/products/products.component';
import { ContactComponent } from 'app/contact/contact.component';
import { AboutComponent } from 'app/about/about.component';
import { LoginComponent } from 'app/login/login.component';
import { KorpaComponent } from 'app/korpa/korpa.component';
import { RegisterComponent } from 'app/register/register.component';
import { SviProizvodiComponent } from 'app/sviProizvodi/sviProizvodi.component';
import { UnosProizvodaComponent } from 'app/unosProizvoda/unosProizvoda.component';
import { SveFarmeComponent } from 'app/sveFarme/sveFarme.component';
import { DodajFarmuComponent } from 'app/dodajFarmu/dodajFarmu.component';
import { SviKorisniciComponent } from 'app/sviKorisnici/sviKorisnici.component';

@Component({
selector: 'moja-aplikacija',
templateUrl: 'app/router.html',
directives: [ROUTER_DIRECTIVES],
styleUrls: ['css/textSlider.css']
})

@RouteConfig([
{path:'/', name:'About', component: AboutComponent, useAsDefault: true},
{path:'/recipes', name:'Recipes', component: RecipesComponent},
{path:'/products', name:'Products', component: ProductsComponent},
{path:'/contacts', name:'Contact', component: ContactComponent},
{path:'/korpa', name:'Korpa', component: KorpaComponent},
{path:'/login', name:'Login', component: LoginComponent},
{path:'/register', name:'Register', component: RegisterComponent},
{path:'/sviProizvodi', name:'SviProizvodi', component: SviProizvodiComponent},
{path:'/unosProizvoda', name:'UnosProizvoda', component: UnosProizvodaComponent},
{path:'/sveFarme', name:'SveFarme', component: SveFarmeComponent},
{path:'/dodajFarmu', name:'DodajFarmu', component: DodajFarmuComponent},
{path:'/sviKorisnici', name:'SviKorisnici', component: SviKorisniciComponent}
])
export class AppComponent {
    router: Router;
    isAuth: String;



    constructor(router: Router) {
        this.router = router;
        router.subscribe((val) => {
            if(localStorage.getItem('token') !== null){
                this.isAuth = "user";
            }else if(localStorage.getItem('admin') !== null ){
                this.isAuth = "admin";
            }else 
                this.isAuth = "no";
        }); 

        
    }

    onLogout(): void {
        localStorage.clear();
        this.router.navigate(['./About']);
        if(localStorage.getItem('token') !== null){
            this.isAuth = "user";
        }else{
            this.isAuth = "no";
        }
    }

}

