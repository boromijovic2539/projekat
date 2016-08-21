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
    var ProductsComponent;
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
            ProductsComponent = (function () {
                function ProductsComponent(builder, http, router) {
                    this.builder = builder;
                    this.http = http;
                    this.jeste = false;
                    this.tip = "voce";
                    this.k = "tip=";
                    this.korpa = [];
                    this.kolicinaKorpa = [];
                    this.router = router;
                    this.setBrojac();
                    this.getMeni();
                    this.setForm();
                }
                ProductsComponent.prototype.setForm = function (builder) {
                    this.kolicina = new common_1.Control('', common_1.Validators.required);
                    this.korpaForm = this.builder.group({
                        kolicina: this.kolicina
                    });
                };
                ProductsComponent.prototype.setBrojac = function () {
                    if (!this.jeste) {
                        this.brojac = 0;
                        this.jeste = true;
                    }
                };
                ProductsComponent.prototype.getMeni = function () {
                    var _this = this;
                    var podatak = this.k.concat(this.tip);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/php/getmeni.php', podatak, { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (proizvodi) {
                        _this.proizvodi = proizvodi.proizvodi;
                    });
                };
                ProductsComponent.prototype.ubaciUKorpu = function (item) {
                    if (this.korpaForm.value.kolicina == "") {
                        alert("Greska! Popunite kolicnu.");
                        console.log("greska");
                    }
                    else if (localStorage.getItem('token') !== null) {
                        item['kolicina'] = this.korpaForm.value.kolicina;
                        console.log(this.korpaForm.value);
                        this.korpa.push(item);
                        alert("Proizvod " + item.naziv + " je dodat u korpu. Kolicina: " + this.korpaForm.value.kolicina + "g");
                        localStorage.setItem('' + item.id, JSON.stringify(item));
                        this.reset();
                    }
                    else {
                        this.router.parent.navigate(['./Login']);
                    }
                };
                ProductsComponent.prototype.reset = function () {
                    this.setForm();
                };
                ProductsComponent.prototype.getVoce = function () {
                    this.tip = "voce";
                    this.getMeni();
                };
                ProductsComponent.prototype.getPovrce = function () {
                    this.tip = "povrce";
                    this.getMeni();
                };
                ProductsComponent.prototype.getMeso = function () {
                    this.tip = "meso";
                    this.getMeni();
                };
                ProductsComponent.prototype.getMlecni = function () {
                    this.tip = "mlecni proizvodi i jaja";
                    this.getMeni();
                };
                ProductsComponent = __decorate([
                    core_1.Component({
                        selector: 'Products',
                        templateUrl: 'app/products/products.html',
                        directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], ProductsComponent);
                return ProductsComponent;
            }());
            exports_1("ProductsComponent", ProductsComponent);
        }
    }
});
//# sourceMappingURL=products.component.js.map