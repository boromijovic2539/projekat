System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, common_1;
    var RecipesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RecipesComponent = (function () {
                function RecipesComponent(http, router) {
                    var _this = this;
                    this.http = http;
                    this.recepti = [];
                    this.router = router;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.get('http://localhost/php/getrecepti.php', { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (recepti) {
                        _this.recepti = recepti.recepti;
                        _this.setAda(_this.recepti);
                        _this.setOpisiRecepata();
                    });
                }
                RecipesComponent.prototype.setAda = function (recepti) {
                    this.ada = recepti;
                };
                RecipesComponent.prototype.ngOnInit = function () {
                };
                RecipesComponent.prototype.ucitaj = function (file, recept) {
                    var XMLHttpRequestObject = false;
                    if (window.XMLHttpRequest) {
                        XMLHttpRequestObject = new XMLHttpRequest();
                    }
                    else if (window.ActiveXObject) {
                        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    var dataSource = file;
                    var divID = 'fileDisplayArea';
                    if (XMLHttpRequestObject) {
                        var obj = document.getElementById(divID);
                        XMLHttpRequestObject.open("GET", dataSource);
                        XMLHttpRequestObject.onreadystatechange = function () {
                            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                                recept.opis_pripreme = XMLHttpRequestObject.responseText;
                            }
                            else {
                            }
                        };
                        XMLHttpRequestObject.send(null);
                    }
                };
                RecipesComponent.prototype.setOpisiRecepata = function () {
                    var vel = this.recepti.length;
                    var i = 0;
                    var file;
                    while (vel !== 0) {
                        file = this.recepti[i].opis_pripreme;
                        this.ucitaj(file, this.recepti[i]);
                        //this.recepti[i].opis_pripreme = this.opisPripreme;
                        console.log(this.recepti[i].opis_pripreme);
                        this.setOpis();
                        i++;
                        vel--;
                    }
                };
                RecipesComponent.prototype.getOpis = function () {
                    return this.opisPripreme;
                };
                RecipesComponent.prototype.setOpis = function () {
                    this.opisPripreme = "";
                };
                RecipesComponent = __decorate([
                    core_1.Component({
                        selector: 'Recipes',
                        templateUrl: 'app/recipes/recipes.html',
                        directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], RecipesComponent);
                return RecipesComponent;
            }());
            exports_1("RecipesComponent", RecipesComponent);
        }
    }
});
//# sourceMappingURL=recipes.component.js.map