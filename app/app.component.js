System.register(['angular2/core', 'angular2/router', 'app/recipes/recipes.component', 'app/products/products.component', 'app/contact/contact.component', 'app/about/about.component', 'app/login/login.component', 'app/korpa/korpa.component', 'app/register/register.component', 'app/sviProizvodi/sviProizvodi.component', 'app/unosProizvoda/unosProizvoda.component', 'app/sveFarme/sveFarme.component', 'app/dodajFarmu/dodajFarmu.component', 'app/sviKorisnici/sviKorisnici.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, recipes_component_1, products_component_1, contact_component_1, about_component_1, login_component_1, korpa_component_1, register_component_1, sviProizvodi_component_1, unosProizvoda_component_1, sveFarme_component_1, dodajFarmu_component_1, sviKorisnici_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipes_component_1_1) {
                recipes_component_1 = recipes_component_1_1;
            },
            function (products_component_1_1) {
                products_component_1 = products_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (korpa_component_1_1) {
                korpa_component_1 = korpa_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (sviProizvodi_component_1_1) {
                sviProizvodi_component_1 = sviProizvodi_component_1_1;
            },
            function (unosProizvoda_component_1_1) {
                unosProizvoda_component_1 = unosProizvoda_component_1_1;
            },
            function (sveFarme_component_1_1) {
                sveFarme_component_1 = sveFarme_component_1_1;
            },
            function (dodajFarmu_component_1_1) {
                dodajFarmu_component_1 = dodajFarmu_component_1_1;
            },
            function (sviKorisnici_component_1_1) {
                sviKorisnici_component_1 = sviKorisnici_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    var _this = this;
                    this.router = router;
                    router.subscribe(function (val) {
                        if (localStorage.getItem('token') !== null) {
                            _this.isAuth = "user";
                        }
                        else if (localStorage.getItem('admin') !== null) {
                            _this.isAuth = "admin";
                        }
                        else
                            _this.isAuth = "no";
                    });
                }
                AppComponent.prototype.onLogout = function () {
                    localStorage.clear();
                    this.router.navigate(['./About']);
                    if (localStorage.getItem('token') !== null) {
                        this.isAuth = "user";
                    }
                    else {
                        this.isAuth = "no";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'moja-aplikacija',
                        templateUrl: 'app/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['css/textSlider.css']
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'About', component: about_component_1.AboutComponent, useAsDefault: true },
                        { path: '/recipes', name: 'Recipes', component: recipes_component_1.RecipesComponent },
                        { path: '/products', name: 'Products', component: products_component_1.ProductsComponent },
                        { path: '/contacts', name: 'Contact', component: contact_component_1.ContactComponent },
                        { path: '/korpa', name: 'Korpa', component: korpa_component_1.KorpaComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
                        { path: '/sviProizvodi', name: 'SviProizvodi', component: sviProizvodi_component_1.SviProizvodiComponent },
                        { path: '/unosProizvoda', name: 'UnosProizvoda', component: unosProizvoda_component_1.UnosProizvodaComponent },
                        { path: '/sveFarme', name: 'SveFarme', component: sveFarme_component_1.SveFarmeComponent },
                        { path: '/dodajFarmu', name: 'DodajFarmu', component: dodajFarmu_component_1.DodajFarmuComponent },
                        { path: '/sviKorisnici', name: 'SviKorisnici', component: sviKorisnici_component_1.SviKorisniciComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map